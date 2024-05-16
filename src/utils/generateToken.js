import jwt from "jsonwebtoken";
import variables from "../config/variables.js";

export function generateToken(payload, expiresIn = "1h") {
  return jwt.sign(payload, variables.JWT_SECRET_KEY, { expiresIn });
}
