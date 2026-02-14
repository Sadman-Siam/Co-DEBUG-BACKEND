import express from "express";
import {
  getChatController,
  createChatController,
  deleteChatController,
  updateChatController,
} from "../controllers/chatController.js";

const router = express.Router();

router.get("/", getChatController);
router.post("/", createChatController);
router.delete("/", deleteChatController);
router.put("/", updateChatController);

export default router;
