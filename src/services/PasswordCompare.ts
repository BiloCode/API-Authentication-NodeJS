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
      const password_exists = await bcrypt.compare(
        this.password,
        this.password_hashed
      );

      return password_exists;
    } catch (error) {
      console.log(error);
    }
  }

}

export default PasswordCompare;