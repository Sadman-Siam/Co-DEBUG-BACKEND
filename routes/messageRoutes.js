import express from "express";

const router = express.Router();

router.get("/", getMessages);
router.post("/", createMessages);
router.delete("/", deleteMessages);
router.put("/", updateMessages);

export default router;
