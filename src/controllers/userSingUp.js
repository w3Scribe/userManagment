import userModel from "../models/userModel.js";
import chalk from "chalk";
import { generateToken } from "../utils/generateToken.js";

/**
 * Handles user sign up.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} - A promise that resolves when the sign up process is complete.
 */

async function userSingUp(req, res, next) {
  const { username, email, password } = req.body;
  try {
    const newUser = new userModel({
      username,
      email,
      password,
    });
    await newUser.save();

    const token = generateToken({ email: newUser.email }, "1m");

    res.cookie("token", token, { httpOnly: true, maxAge: 1000 * 60 * 4 });

    console.log(chalk.green(newUser));

    res.status(201).redirect("/api/users");
  } catch (error) {
    next(error);
  }
}

export default userSingUp;
