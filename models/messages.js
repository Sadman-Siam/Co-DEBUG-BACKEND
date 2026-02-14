import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    chatID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChatID",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserID",
    },
    role: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true },
);
const message = mongoose.model("Message", messageSchema);
export default message;
