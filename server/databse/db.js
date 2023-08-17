import mongoose from "mongoose";

const Connection = async () => {
  const URL =
    "mongodb+srv://ajay3008:AJAYSINGH@blog-website.ndfvfgj.mongodb.net/blog-website?retryWrites=true&w=majority";
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
