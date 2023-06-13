import express from "express";

// Import Other File
import connectDB from "./dataConnect.js";

// Start The Express
const app = express();

// MongoDb Atlas connection
connectDB();

// All Express Routes

app.listen(3000, () => {
  console.log("I am Running");
  console.log(`server running on port 3000`);
});
