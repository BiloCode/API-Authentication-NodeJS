import bcrypt from 'bcrypt';

class PasswordEncrypt {
  private salt : number;
  private password : string;

  constructor(password : string){
    this.salt = 10;
    this.password = password;
  }

  public async __invoke(){
    try {
      const password_encrypt = await bcrypt.hash(
        this.password,
        this.salt
      );

      return password_encrypt;
    } catch (error) {
      console.log(error);
    }
  }

}

export default PasswordEncrypt;