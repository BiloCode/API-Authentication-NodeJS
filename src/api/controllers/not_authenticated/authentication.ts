import { Request, Response } from "express";

import env from "../../../config";

import TokenGenerateForUser from '../../../services/TokenGenerateForUser';
import UserModel from "../../../models/UserModel";
import GetUserByUsername from "../../../services/GetUserByUsername";
import PasswordCompare from "../../../services/PasswordCompare";

export default async (req : Request, res : Response) => {
  try {
    const { username , password } = req.body;

    const getUser = new GetUserByUsername(UserModel);
    const user = await getUser.__invoke(username);

    if(!user)
      return res.status(500).json({ message : 'User not found' });

    const passwordCompare = new PasswordCompare(password, user.password);
    const is_correct = await passwordCompare.__invoke();
    
    if(!is_correct)
      return res.status(200).json({ message : 'Authentication invalid' });

    const createToken = new TokenGenerateForUser(env.token_secret_key);
    const jwt_token = createToken.__invoke({
      id : user._id,
      type : 'user'
    });

    res.status(200).json({ token : jwt_token });
  } catch (error) {
    console.log(error);
  }
}