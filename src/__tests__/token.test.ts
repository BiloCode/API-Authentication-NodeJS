import { expect , describe , it } from '@jest/globals';
import env from '../config';
import TokenCheck from '../services/TokenCheck';
import TokenGenerateForUser from '../services/TokenGenerateForUser';

describe('Token Tests', () => {
  const private_key = env.token_secret_key;

  it('Create token' , () => {
    const generateToken = new TokenGenerateForUser(private_key);
    const token = generateToken.__invoke({
      id : 1,
      type : 'user'
    });

    expect(token).not.toBeUndefined();
  });

  it('Check Token', () => {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidHlwZSI6InVzZXIiLCJpYXQiOjE2MTA3NDAwMTgsImV4cCI6MTYxMTk0OTYxOH0.pA0tZ6isKAJqKxkRl4H28BUTguvRIRX99fvB7iFZrok';

    const tokenCheck = new TokenCheck(private_key);
    const token_decode = tokenCheck.__invoke(token.split(' ')[1]);

    expect(token_decode).not.toBeNull();
  });

});