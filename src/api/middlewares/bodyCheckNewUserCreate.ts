import { NextFunction, Request, Response } from "express";

export default (req : Request, res : Response, next : NextFunction) => {
  const { username , password , email, country } = req.body;

  if(!username || !password || !email || !country)
    return res.status(403).json({ message : 'Some body element is empty' });

  next();
}