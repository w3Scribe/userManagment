import { genSalt, hash } from "bcrypt";

async function encryptPassword(password) {
  try {
    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);
    return hashPassword;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default encryptPassword;
