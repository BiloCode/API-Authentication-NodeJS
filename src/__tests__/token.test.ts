import { expect , describe , it } from '@jest/globals';
import env from '../config';
import TokenCheck from '../services/TokenCheck';
import TokenGenerate from '../services/TokenGenerate';

describe('Token Tests', () => {
  const private_key = env.token_secret_key;

  it('Create token' , () => {
    const generateToken = new TokenGenerate(private_key);
    const token = generateToken.__invoke({
      id : 'asd5qwe6qw1e34312643q2d',
      type : 'user'
    });

    expect(token).not.toBeUndefined();
  });

  it('Check Token', () => {
    //15-01-21 -> 29-01-21 (expired)
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidHlwZSI6InVzZXIiLCJpYXQiOjE2MTA3NDAwMTgsImV4cCI6MTYxMTk0OTYxOH0.pA0tZ6isKAJqKxkRl4H28BUTguvRIRX99fvB7iFZrok';

    const tokenCheck = new TokenCheck(private_key);
    const token_decode = tokenCheck.__invoke(token.split(' ')[1]);

    expect(token_decode).not.toBeNull();
  });

});