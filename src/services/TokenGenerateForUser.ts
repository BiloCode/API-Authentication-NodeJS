import jsonwebtoken from 'jsonwebtoken'
import TUserTokenPayload from '../types/TUserTokenPayload';

class TokenGenerateForUser {
  private secret_key : string;

  constructor(secret_key : string){
    this.secret_key = secret_key;
  }

  public __invoke(payload : TUserTokenPayload){
    try {
      const token = jsonwebtoken.sign(payload, this.secret_key, {
        expiresIn : '14d'
      });

      return 'Bearer ' + token;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

}

export default TokenGenerateForUser;