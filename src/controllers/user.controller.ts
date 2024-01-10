import { Request, Response } from "express";
import User from "../models/user.model";

export const SignUpUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if ([name, email, password].some((field) => field.trim() === "")) {
      return res.status(400).json({ msg: "Every field is required!" });
    }

    const isUserExist = await User.findOne({
      email: email,
    });

    if (isUserExist) {
      return res
        .status(403)
        .json({ msg: "User with this email already exist!" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    console.log(`User-Register-Error`);
    return res
      .status(500)
      .json({ msg: "An error occured while registering user" });
  }
};

export const removeUser = async (req: Request, res: Response) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ msg: "UserID is required!" });
  }

  const deletedUser = await User.deleteOne({
    
  });
};
