import { Request, Response } from "express";

import UserModel from "../../../models/UserModel";
import PasswordEncrypt from "../../../services/PasswordEncrypt";
import UserCreate from "../../../services/UserCreate";

export default async (req : Request, res : Response) => {
  try {
    const { username , password , email, country } = req.body;

    const encryptPassword = new PasswordEncrypt(password);
    const password_hashed = await encryptPassword.__invoke();
    if(!password_hashed)
      return res.status(500).json({ message : 'Password not hashed' });

    const userCreate = new UserCreate(UserModel);
    const new_user = await userCreate.__invoke({
      username,
      password : password_hashed,
      country,
      email
    });

    if(!new_user)
      return res.status(500).json({ message : 'User not created' });

    res.status(201).json({ new_user });
  } catch (error) {
    console.log(error);
  }
}