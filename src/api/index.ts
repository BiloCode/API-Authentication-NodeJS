import { Router } from 'express';

//Routers
import auth_router from './router/auth_router';
import country_router from './router/country_router';
import user_router from './router/user_router';

export default () => {
  const app = Router();

  user_router(app);
  auth_router(app);
  country_router(app);

  return app;
}