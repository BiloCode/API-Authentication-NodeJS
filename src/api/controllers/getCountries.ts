import { Request, Response } from "express";
import GetCountries from "../../services/GetCountries";

export default async (req : Request ,res : Response) => {
  try {
    const getCountries = new GetCountries();
    const countries = await getCountries.__invoke();

    res.status(200).json({ countries });
  } catch (error) {
    console.log(error);
  }
}