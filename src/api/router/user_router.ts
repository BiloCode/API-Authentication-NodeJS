import { Router } from "express";

import newUserCreate from "../controllers/not_authenticated/newUserCreate";
import userPasswordChange from "../controllers/authenticated/userPasswordChange";
import checkUserAuthenticated from "../middlewares/checkUserAuthenticated";
import bodyCheckPasswordChange from "../middlewares/bodyCheckPasswordChange";
import bodyCheckNewUserCreate from "../middlewares/bodyCheckNewUserCreate";

export default (app : Router) => {
  
  app.post('/user', bodyCheckNewUserCreate, newUserCreate);
  app.put('/user/password', [ checkUserAuthenticated , bodyCheckPasswordChange ] , userPasswordChange);

}