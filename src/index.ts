import express from 'express';
import env from './config';
import loaders from './loaders';

(async () => {
  const application = express();
  await loaders(application);

  application.listen(env.port, () => {
    console.log(`Server on port : ${env.port}`);
  });

})();