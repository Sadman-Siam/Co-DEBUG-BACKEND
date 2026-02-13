import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  chatID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ChatID",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserID",
  },
  role: {
    type: "User" | "Assistant" | "System",
  },
  content: {
    type: String,
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
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
