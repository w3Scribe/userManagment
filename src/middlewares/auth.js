import jwt from "jsonwebtoken";
import variables from "../config/variables.js";

async function auth(req, res, next) {
  const token = req.cookies.token;

  if (!token) return res.status(200).redirect("/auth/signup");

  try {
    jwt.verify(token, variables.JWT_SECRET_KEY);
    next();
  } catch (error) {
    const hasExpried = error.name === "TokenExpiredError";
    return res
      .status(401)
      .redirect(hasExpried ? "/auth/login" : "/auth/signup");
  }
}

export default auth;
