import exress from "express";
import {
  accountLoginController,
  accountRegisterController,
} from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = exress.Router();

router.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "AuthRoutes: This is a protected route",
    userId: req.user,
  });
});
router.post("/register", accountRegisterController);
router.post("/login", accountLoginController);

export default router;
