import { test , expect } from '@jest/globals';

import GetCountries from '../services/GetCountries';

test('Get Countries', async () => {
  const getCountries = new GetCountries();
  const countries = await getCountries.__invoke();

  expect(countries).not.toBeUndefined();
});