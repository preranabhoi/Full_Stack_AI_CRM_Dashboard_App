import jwt from "jsonwebtoken";

export const generateToken = (userId) =>
  jwt.sign({ id: userId }, process.envJWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
