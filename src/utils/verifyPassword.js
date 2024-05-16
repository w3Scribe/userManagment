import { compare } from "bcrypt";

async function verifyPassword(password, hashPassword) {
  try {
    const isMatched = await compare(password, hashPassword);
    return isMatched;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default verifyPassword;
