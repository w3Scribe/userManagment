import chalk from "chalk";
import userModel from "../models/userModel.js";

function loginController(req, res, next) {
  const { email, password } = req.body;
  try {
    const user = new userModel({ email, password });
    user.save();
    console.log(chalk.green("User saved successfully"));
    res.redirect("/api/users");
  } catch (error) {
    next(error);
  }
}

export default loginController;
