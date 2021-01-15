import bcrypt from 'bcrypt';

class PasswordCompare {
  private password : string;
  private password_hashed : string;

  constructor(password : string, password_hashed : string){
    this.password = password;
    this.password_hashed = password_hashed;
  }

  public async __invoke(){
    try {
      const match = await bcrypt.compare(
        this.password,
        this.password_hashed
      );

      return match;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

}

export default PasswordCompare;