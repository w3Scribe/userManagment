import createHttpError from "http-errors";
import userModel from "../models/userModel.js";
import verifyPassword from "../utils/verifyPassword.js";
import { generateToken } from "../utils/generateToken.js";

async function loginController(req, res, next) {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    const isPasswordValid = await verifyPassword(password, user.password);

    if (!user || !isPasswordValid) {
      throw createHttpError(401, "Invalid credentials");
    }

    const token = generateToken({ email: user.email }, "1m");
    res.cookie("token", token, { httpOnly: true, maxAge: 1000 * 60 });
    return res.redirect("/api/users");
    
  } catch (error) {
    next(error);
  }
}

export default loginController;
