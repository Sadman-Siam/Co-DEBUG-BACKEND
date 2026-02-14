import express from "express";
import {
  getUserController,
  createUserController,
  deleteUserController,
  updateUserController,
} from "../controllers/userConstroller.js";

const router = express.Router();

router.get("/", getUserController);
router.post("/", createUserController);
router.delete("/", deleteUserController);
router.put("/", updateUserController);

export default router;
