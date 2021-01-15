import { Router } from "express";

import userChangePassword from "../controllers/userChangePassword";
import isUserAuthenticated from "../middlewares/isUserAuthenticated";

export default (app : Router) => {
  
  app.put('/user/:id/password-change', isUserAuthenticated , userChangePassword);

}