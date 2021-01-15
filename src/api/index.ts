import { Router } from 'express';

//Routers
import user_router from './router/user_router';
import authentication_router from './router/authentication_router';

export default () => {
  const app = Router();

  user_router(app);
  authentication_router(app);

  return app;
}