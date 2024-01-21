import mongoose from "mongoose";
import { DB_NAME } from "../constant";
import dotenv from "dotenv";
import express from "express";

dotenv.config(); // Load environment variables from .env file

const app = express();

const ConnectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@blog-website.ndfvfgj.mongodb.net/blog-website?retryWrites=true&w=majority`
    );
    app.on("error", (error) => {
      console.log("there is an error ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`DB connected successfully on port :${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default ConnectDB;
