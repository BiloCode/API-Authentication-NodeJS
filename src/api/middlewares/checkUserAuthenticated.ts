import { NextFunction, Request , Response } from 'express';
import env from '../../config';
import TokenCheck from '../../services/TokenCheck';

export default async (req : Request, res : Response, next : NextFunction) => {
  const token_formated = req.headers.authorization;
  if(!token_formated)
    return res.status(406).json({ message : 'Authorization header undefined' });
  
  const tokenCheck = new TokenCheck(env.token_secret_key);
  const token_sign = token_formated.split(' ')[1];
  const token = tokenCheck.__invoke(token_sign);
  
  if(token.type !== 'user')
    return res.status(401).json({ message : 'Not Authorized' });    

  req.body.userId = token.id;
  return next();
}