import { Model } from "mongoose";
import { IUserModel } from "../interfaces/IUserModel";

class UserUpdatePassword {
  private userModel : Model<IUserModel>;

  constructor(userModel : Model<IUserModel>){
    this.userModel = userModel;
  }

  public async __invoke(id: number, new_password : string){
    try {
      const updated = await this.userModel.updateOne(
        { _id : id },
        { password : new_password }
      );

      return updated.nModified > 0;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default UserUpdatePassword;