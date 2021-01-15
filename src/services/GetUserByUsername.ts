import { Model } from "mongoose";
import { IUserModel } from "../interfaces/IUserModel";

class GetUserByUsername {
  private userModel : Model<IUserModel>;

  constructor(model : Model<IUserModel>){
    this.userModel = model;
  }

  public async __invoke(username : string){
    try {
      const model = await this.userModel.findOne({ username });

      return model;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

}

export default GetUserByUsername;