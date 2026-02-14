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
async function ConnectMongoDb() {
  const client = new MongoClient(process.env.MONGO_URL);
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  } finally {
  }
}

app.get("/", (req, res) => {
  res.send("Server Is Up and Running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

ConnectMongoDb();
