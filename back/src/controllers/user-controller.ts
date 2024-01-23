//request aati hai frontend se jab bhi request marte ho
//ex:-api url, api body
//response ke sath hum kya show karna chahte hai frontend pr vo bejh skte

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response } from "express";

import Token from "../model/token.js";
// import User from "../model/user.js";
import User from "../model/user.js";
import mongoose from "mongoose";

dotenv.config();

export const registerUser = async (req: Request, res: Response) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 15);
    const user = {
      username: req.body.username,
      name: req.body.name,
      password: hashPassword,
    };
    const newUser = await new User(user).save();
    return res.status(200).json({ msg: "Signup successfull" });
  } catch (error) {
    return res.status(500).json({ msg: "Error while signing up user" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  let user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res
      .status(404)
      .send({ success: false, message: "user doesn't exist" });
  }
  try {
    let matchedUser = await bcrypt.compare(req.body.password, user.password);
    if (matchedUser) {
      const accessToken = jwt.sign(
        user.toJSON(),
        process.env.ACCESS_SECRET_KEY as string,
        { expiresIn: "30m" }
      );
      const refreshToken = jwt.sign(
        user.toJSON(),
        process.env.REFRESH_SECRET_KEY as string
      );

      const newToken = await new Token({ token: refreshToken });
      await newToken.save();
      res.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        name: user.name,
        username: user.username,
      });
    } else {
      return res
        .status(401)
        .send({ success: false, message: "password doesn't match" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "there is an error while login user" });
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  const token = req.body.token;
  await Token.deleteOne({ token: token });
  res
    .status(204)
    .send({ success: true, message: "user logged out successfully" });
};
