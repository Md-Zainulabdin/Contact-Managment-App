import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Every field is required!" });
    }

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // Create JSON Web Token
    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
    let token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    const responseUser = {
      name: user.name,
      email: user.email,
    };
    // Return the token and user data
    res.json({ token, responseUser });
  } catch (error) {
    console.log(`User-Login-Error`);
    return res.status(500).json({ msg: "An error occured while logging user" });
  }
};
