import chalk from "chalk";
import mongoose from "mongoose";

export const connectToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    mongoose.set("debug", true);
    console.log(chalk.green("Connected to Database"));
  } catch (error) {
    console.log(error.message);
  }
};
