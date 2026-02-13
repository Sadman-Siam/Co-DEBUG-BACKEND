import mongoose from "mongoose";

const userSchema = new mongoose.schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  createdAt: {
    date: Date,
    default: Date.now,
  },
  updatedAt: {
    date: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.export = User;
