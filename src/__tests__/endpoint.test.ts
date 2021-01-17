import { describe , it , expect } from '@jest/globals';
import supertest from 'supertest';

import ExpressInitialization from '../app';

describe('Endpoint Test', () => {
  //15-01-21 -> 29-01-21 (expired)
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidHlwZSI6InVzZXIiLCJpYXQiOjE2MTA3NDAwMTgsImV4cCI6MTYxMTk0OTYxOH0.pA0tZ6isKAJqKxkRl4H28BUTguvRIRX99fvB7iFZrok';
  
  it('Test endpoint password change', async () => {
    const server = await ExpressInitialization();
    const request = supertest(server);

    //In process...
  });

})