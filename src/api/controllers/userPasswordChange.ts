import { Request, Response } from "express";

export default (req : Request, res : Response) => {
  try {
    const { id } = req.params;

  } catch (error) {
    console.log(error);
  }
}