import jwt from "jsonwebtoken";
import variables from "../config/variables.js";

async function auth(req, res, next) {
  const token = req.cookies.token;

  if (!token) return res.redirect("/auth/signup");

  try {
    jwt.verify(token, variables.JWT_SECRET_KEY);
    next();
  } catch (error) {
    // if (error.name === "TokenExpiredError") return res.redirect("/auth/login");
    // return res.redirect("/auth/signup");
    return res.status(401).
  }
}

export default auth;
