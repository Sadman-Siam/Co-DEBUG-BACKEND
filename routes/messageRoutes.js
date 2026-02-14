import express from "express";
import {
  getMessageController,
  createMessageController,
  deleteMessageController,
  updateMessageController,
} from "../controllers/messageController.js";

const router = express.Router();

router.get("/", getMessageController);
router.post("/", createMessageController);
router.delete("/", deleteMessageController);
router.put("/", updateMessageController);

export default router;
