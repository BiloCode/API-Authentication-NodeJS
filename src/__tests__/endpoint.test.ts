import { describe , it , expect } from '@jest/globals';
import supertest from 'supertest';

import Initialization from '../app';

describe('Endpoint Test', () => {
  
  it('Test endpoint password change', async () => {
    const server = await Initialization();
    const request = supertest(server);
    const response = await request.put('/user/1/password-change');

    expect(response.status).toBe(406);
  });

})