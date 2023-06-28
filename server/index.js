import express, { Router } from "express";
import dotenv from "dotenv";
import Connection from "./databse/db.js";

import router from "./routes/route.js";

dotenv.config();

const app = express();
app.use("/", Router);

const PORT = process.env.PORT || 8000;
// //routes
// app.use("/api/v1/auth", authRoutes);
// //listen

const USERNAME = process.env.DB_username;
const PASSWORD = process.env.DB_password;
Connection(username, password);

Connection(USERNAME, PASSWORD);

app.listen(8000, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
