import { Router } from "express";

import userPasswordChange from "../controllers/userPasswordChange";
import isUserAuthenticated from "../middlewares/isUserAuthenticated";

export default (app : Router) => {
  
  app.put('/user/:id/password-change', isUserAuthenticated , userPasswordChange);

}