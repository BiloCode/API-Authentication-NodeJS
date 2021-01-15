import express from 'express';

import express_loader from './loaders/express';
import mongoose_loader from './loaders/mongoose';

async function Initialization(){
  const application = express();

  await mongoose_loader();
  await express_loader(application);

  return application;
}

export default Initialization;