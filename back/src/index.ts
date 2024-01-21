import dotenv from "dotenv";
import express, { Router } from "express";
import cors from "cors";
import ConnectDB from "./db/index";
import bodyParser from "body-parser";

dotenv.config({
  path: "./env",
});

const app = express();
app.use(
  cors({
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST"],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router());

console.log("before");

ConnectDB();
