import mongoose from 'mongoose';
import env from '../config';

export default async () => {
  try {
    await mongoose.connect(`mongodb://${env.mongo_server}/${env.mongo_dbname}`, {
      useUnifiedTopology : true,
      useNewUrlParser : true
    });
  } catch (error) {
    console.log(error);
  }
}