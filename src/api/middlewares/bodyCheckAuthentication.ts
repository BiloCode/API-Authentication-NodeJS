import { NextFunction, Request, Response } from "express";

export default (req : Request, res : Response, next : NextFunction) => {
  const { username , password } = req.body;

  if(!username || !password)
    return res.json({ message : 'Username or password empty' });

  next();
}