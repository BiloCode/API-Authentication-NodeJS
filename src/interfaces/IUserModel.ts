import { Document } from 'mongoose';

export interface IUser  {
  username : string;
  password : string;
  email : string;
  country : number;
}

export interface IUserModel extends IUser, Document {}