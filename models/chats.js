import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserID",
    },
    title: {
      type: String,
    },
    lastMessage: {
      type: String,
    },
    messageCount: {
      type: Number,
    },
  },
  { timestamps: true },
);

const chat = mongoose.model("Chat", chatSchema);
export default chat;
