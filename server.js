import express from "express";
import mongoose from "mongoose";

// App configuration
const app = express();
const port = process.env.PORT || 8001;

// middleware

// DB Configure

// API Endpoint
app.get("/", (req, res) =>
  res.status(200).send("Hello Everyone!, Welcome to Zernym")
);

// Listners
app.listen(port, () => console.log(`listen on port: ${port}`));
