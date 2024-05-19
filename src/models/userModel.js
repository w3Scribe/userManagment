import mongoose from "mongoose";
import encryptPassword from "../utils/encryptPassword.js";
import chalk from "chalk";

/**
 * User Schema
 * @typedef {Object} UserSchema
 * @property {string} username - The username of the user.
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 */

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

userSchema.pre("save", async function (next) {
  this.password = await encryptPassword(this.password);
  next();
});

userSchema.post("save", (doc) => {
  console.log(chalk.green.bold("user succefully saved : "), chalk.green(doc));
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
