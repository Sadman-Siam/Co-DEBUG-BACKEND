import mongoose from "mongoose";

const chatSchema = new mongoose.schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserID",
  },
  Title: {
    type: String,
  },
  lastMessage: {
    type: String,
  },
  messageCount: {
    type: integer,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Chat = mongoose.model("Chat", chatSchema);
module.export = Chat;
