import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const Connection = async () => {
  const URL = `mongodb+srv://${username}:${password}@blog-website.ndfvfgj.mongodb.net/blog-website?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
