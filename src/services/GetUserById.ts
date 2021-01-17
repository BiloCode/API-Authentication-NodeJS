import { Model } from "mongoose";
import { IUserModel } from "../interfaces/IUserModel";

class GetUserById {
  private userModel : Model<IUserModel>;

  constructor(userModel : Model<IUserModel>){
    this.userModel = userModel;
  }

  public async __invoke(id : string) {
    try {
      const user = await this.userModel.findById(id);

      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default GetUserById;