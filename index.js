import express from "express";
import MongoClient from "mongodb";

const app = express();
const port = 3000;

async function ConnectMongoDb() {}

app.get("/", (req, res) => {
  res.send("Server Is Up and Running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
