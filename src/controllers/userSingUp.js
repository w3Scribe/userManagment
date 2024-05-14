import encryptPassword from "../utils/encryptPassword.js";
import userModel from "../models/userModel.js";
import chalk from "chalk";

async function userSingUp(req, res, next) {
  const { username, email, password } = req.body;
  try {
    const encryptedPassword = await encryptPassword(password);
    const newUser = await new userModel({
      username,
      email,
      password: encryptedPassword,
    });
    newUser.save();
    console.log(chalk.green(newUser));
    res.status(201).redirect("/api/users");
  } catch (error) {
    next(error);
  }
}

export default userSingUp;
