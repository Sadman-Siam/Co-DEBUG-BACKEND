import express from "express";
import { MongoClient } from "mongodb";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// app init
const app = express();
const router = express.Router();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
const port = 3000;

// routes import

import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

//routes connect
app.use("/", router);
app.use("/api/users", userRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);

// Database Connection
let isConnected = false;
const connectDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    isConnected = false;
    throw error;
  }
};
app.get("/", (req, res) => {
  res.send("Server Is Up and Running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

connectDB();
