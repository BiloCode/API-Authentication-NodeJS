import cors from 'cors';
import router from '../api';
import { Application, json, urlencoded } from "express";

export default (app : Application) => {
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended : false }));

  app.use(router());  
}