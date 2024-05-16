import jwt from "jsonwebtoken";
import variables from "../config/variables.js";

async function auth(req, res, next) {
  const token = req.cookies.token;

  if (!token) return res.redirect("/auth/signup");

  const isVerifiedUser = jwt.verify(token, variables.JWT_SECRET_KEY);

  if (isVerifiedUser) next();
  else res.redirect("/auth/signup");
}

export default auth;
