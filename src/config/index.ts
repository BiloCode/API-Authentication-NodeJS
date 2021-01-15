import dotenv from 'dotenv';

const configuration = dotenv.config();
if(configuration.error) {
  throw configuration.error;
}

const env = {
  port : process.env.PORT || 3000,
  token_secret_key : process.env.TOKEN_SECRET_KEY!,
  mongo_dbname : process.env.MONGO_DBNAME!,
  mongo_server : process.env.MONGO_SERVER!,
  mongo_user : process.env.MONGO_USER!,
  mongo_pass : process.env.MONGO_PASS!
}

export default env;