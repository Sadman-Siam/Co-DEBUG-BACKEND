import express from "express";

const router = express.Router();

router.get("/", getChats);
router.post("/", createChats);
router.delete("/", deleteChats);
router.put("/", updateChats);

export default router;
