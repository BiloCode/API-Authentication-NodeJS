import env from './config';
import Initialization from './app';

(async () => {
  const application = await Initialization();

  application.listen(env.port, () => {
    console.log(`Server on port : ${env.port}`);
  });
})();