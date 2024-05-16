import mongoose from "mongoose";
import encryptPassword from "../utils/encryptPassword.js";

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

userSchema.post("save", async function (_doc, next) {
  this.password = await encryptPassword(this.password);
  next();
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
