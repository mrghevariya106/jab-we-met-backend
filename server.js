import express from "express";
import mongoose from "mongoose";
import Cors from "cors"

import Cards from "./dbCards.js";

// App configuration
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:JdexFW3ZYUmBPPma@cluster0.s75yv.mongodb.net/JWMDB?retryWrites=true&w=majority`;

// middleware
app.use(express.json());
app.use(Cors());

// DB Configure
mongoose.connect(connection_url, (err) => {
  if (err) throw err;
  console.log("connected to MongoDB");
});

// API Endpoint
app.get("/", (req, res) =>
  res.status(200).send("Hello Everyone!, Welcome to Zernym")
);

app.post("/jwm/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/jwm/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listners
app.listen(port, () => console.log(`listen on port: ${port}`));
