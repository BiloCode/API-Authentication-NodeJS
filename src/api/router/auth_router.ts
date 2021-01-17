import { Router } from "express";

import authentication from "../controllers/not_authenticated/authentication";
import authenticationCheck from "../controllers/authenticated/authenticationCheck";
import bodyCheckAuthentication from "../middlewares/bodyCheckAuthentication";
import checkUserAuthenticated from "../middlewares/checkUserAuthenticated";

export default (app : Router) => {

  app.get('/auth', checkUserAuthenticated, authenticationCheck);
  app.post('/auth', bodyCheckAuthentication, authentication);

}