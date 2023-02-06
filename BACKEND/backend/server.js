const app = require("./app");
const express = require("express");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");
//const {PORT } = require("./config/config.env")
const PORT = 8000; 
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Connecting to database
connectDatabase();

const CLOUDINARY_NAME = "du0h7gbzh"
const CLOUDINARY_API_KEY = "222773423746569"
const CLOUDINARY_API_SECRET = "m7vjT1Wn1t2Z1e3tTGL3NBeG0Rw"

cloudinary.config({
  cloud_name:CLOUDINARY_NAME ,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const server = app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
