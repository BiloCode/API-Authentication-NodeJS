import { Model } from "mongoose";
import { IUser, IUserModel } from "../interfaces/IUserModel";

class UserCreate {
  private userModel : Model<IUserModel>;

  constructor(model : Model<IUserModel>){
    this.userModel = model;
  }

  public async __invoke(data : IUser){
    try {
      const new_user = this.userModel.create({ 
        ...data 
      });
      
      return new_user;
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserCreate;