import { describe , beforeEach , it , expect } from '@jest/globals';

import mongoose_loader from '../loaders/mongoose';
import UserModel from '../models/UserModel';
import GetUserByUsername from '../services/GetUserByUsername';
import PasswordCompare from '../services/PasswordCompare';
import PasswordEncrypt from '../services/PasswordEncrypt';
import UserCreate from '../services/UserCreate';

describe('MongoDB',() => {
  const username = 'bilo_code';
  const password = 'bilo_code';

  beforeEach(async () => {
    await mongoose_loader();
  });

  it('Create new user', async () => {
    const passwordEncrypt = new PasswordEncrypt(password);
    const userCreate = new UserCreate(UserModel);
    
    const password_encrypted = await passwordEncrypt.__invoke();
    const new_user = await userCreate.__invoke({
      username: 'bilo123',
      email : 'bilo_paredes@hotmail.com',
      password : password_encrypted || '',
      country : 1
    });

    expect(new_user).not.toBeUndefined();
  });

  it('GetUserByUsername && CheckPassword', async () => {
    const getUserByUsername = new GetUserByUsername(UserModel);
    const user = await getUserByUsername.__invoke(username);

    if(!user) return;

    const passwordCompare = new PasswordCompare(password, user.password);
    const is_correct = await passwordCompare.__invoke();

    expect(is_correct).toBeTruthy();
  });

})