import express from "express";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUsers);
router.delete("/", deleteUser);
router.put("/", updateUser);

export default router;
