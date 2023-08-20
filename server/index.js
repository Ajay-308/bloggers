

import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

//components
import Connection from "./databse/db.js";
import Router from "./routes/route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = 5000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server is running successfully on PORT ${PORT}`)
    );
  })

  .catch((err) => {
    console.error("Error connecting to the database:", err.message);
  });
