import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

// app init
const app = express();
const port = 3000;

// routes import
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

//routes connect
app.use("/api/users", userRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);

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
