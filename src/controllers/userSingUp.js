import encryptPassword from "../utils/encryptPassword.js";

async function userSingUp(req, res) {
  const { username, email, password } = req.body;
  try {
    const encryptedPassword = await encryptPassword(password);
    const newUser = await new userModel({
      username,
      email,
      password: encryptedPassword,
    });
    newUser.save();
    res.status(201).redirect("/api/users");
  } catch (error) {
    next(error);
  }
}

export default userSingUp;
