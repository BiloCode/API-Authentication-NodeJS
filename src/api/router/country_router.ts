import { Router } from "express";

import getCountries from "../controllers/getCountries";

export default (app : Router) => {
  app.get('/countries', getCountries);
}