import chalk from "chalk";
import variables from "./variables.js";
import mongoose from "mongoose";

async function connect() {
  try {
    const connection = await mongoose.connect(variables.MONGODB_URI);
    console.log(
      chalk.cyan(`Connected to the database ${connection.connection.name}`)
    );
  } catch (error) {
    console.log(chalk.red(`Error: ${error}`));
  }
}

export default connect;
