import createHttpError from "http-errors";
import userModel from "../models/userModel.js";
import verifyPassword from "../utils/verifyPassword.js";

async function loginController(req, res, next) {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      const err = createHttpError(404, "User not found");
      return next(err);
    }
    const decryptedPassword = await verifyPassword(password, user.password);

    if (!decryptedPassword) {
      const err = createHttpError(401, "Invalid password");
      return next(err);
    }

    res.redirect("/api/users");
  } catch (error) {
    next(error);
  }
}

export default loginController;
