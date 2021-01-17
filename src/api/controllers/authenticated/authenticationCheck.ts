import { Request, Response } from "express";

import UserModel from "../../../models/UserModel";
import GetUserById from "../../../services/GetUserById";

export default async (req : Request, res : Response) => {
  try {
    const { userId } = req.body;
    
    const getUserById = new GetUserById(UserModel);
    const user = await getUserById.__invoke(userId);

    if(!user)
      return res.status(404).json({ message : 'User not found' })

    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
}