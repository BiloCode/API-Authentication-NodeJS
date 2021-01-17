import { Application } from "express";

import getCountries from "../controllers/getCountries";

export default (app : Application) => {
  app.get('/countries', getCountries);
}