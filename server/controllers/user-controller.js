//request aati hai frontend se jab bhi request marte ho
//ex:-api url, api body
//response ke sath hum kya show karna chahte hai frontend pr vo bejh skte

import User from "../model/user";

export const signupUser = async (request, response) => {
  try {
    const user = request.body;

    const newUser = new User(user);
    await newUser.save();

    return response.status(200).json({ msg: "signup successfully" });
  } catch (error) {
    return response.status(500).json({ msg: "Error while signup the user" });
  }
};
