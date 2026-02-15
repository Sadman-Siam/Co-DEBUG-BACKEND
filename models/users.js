import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requird: true,
    },
    email: {
      type: String,
      requird: true,
    },
    password: {
      type: String,
      requird: true,
    },
  },
  { timestamps: true },
);

const user = mongoose.model("User", userSchema);
export default user;
