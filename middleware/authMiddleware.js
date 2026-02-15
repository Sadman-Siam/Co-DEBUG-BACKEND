import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  let token;
  if (req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.id;
      next();
    } catch (error) {
      return res.status(401).json({
        message: "AuthMiddleware: Unauthorized",
      });
    }
  } else {
    return res.status(401).json({
      message: "AuthMiddleware: No token provided",
    });
  }
};
