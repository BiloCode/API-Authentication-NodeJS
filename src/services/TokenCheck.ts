import jsonwebtoken from 'jsonwebtoken';

class TokenCheck {
  private secret_key : string;

  constructor(secret_key : string){
    this.secret_key = secret_key;
  }

  public __invoke(token : string) : any{
    try {
      const token_decode = jsonwebtoken.verify(
        token,
        this.secret_key
      );

      return token_decode;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

}

export default TokenCheck;