import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Import Other File
import connectDB from "./dataConnect.js";
import userRoutes from "./routes/users.js";

dotenv.config();
// MongoDb Atlas connection
connectDB();

// Start The Express
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// All Express Routes
app.use("/user", userRoutes);

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("I am Running");
  console.log(`server running on port ${PORT}`);
});
