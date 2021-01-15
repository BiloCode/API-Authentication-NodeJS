import { model, Schema } from "mongoose";
import { IUserModel } from "../interfaces/IUserModel";

const UserModel = new Schema<IUserModel>({
  username : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true,
    unique : true
  },
  country : {
    type : Number,
    required : true
  }
});

export default model('user', UserModel);