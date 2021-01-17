import { Request, Response } from "express";

import UserModel from "../../../models/UserModel";
import PasswordEncrypt from "../../../services/PasswordEncrypt";
import UserUpdatePassword from "../../../services/UserUpdatePassword";

export default async (req : Request, res : Response) => {
  try {
    const { userId , new_password } = req.body;

    const userUpdatePassword = new UserUpdatePassword(UserModel);
    const passwordEncrypt = new PasswordEncrypt(new_password);
    
    const password_hashed = await passwordEncrypt.__invoke();
    if(password_hashed){
      const is_update = await userUpdatePassword.__invoke(userId, password_hashed);
      return res.status(200).json({ is_update });
    }

    return res.status(500).json({ message : 'Password not hashed' });
  } catch (error) {
    console.log(error);
  }
}