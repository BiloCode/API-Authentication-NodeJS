import { NextFunction, Response , Request } from "express";

export default (req : Request, res : Response, next : NextFunction) => {
  const { new_password } = req.body;
  if(!new_password) 
    return res.status(403).json({ message : 'New password empty' });

  next();
}