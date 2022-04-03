import mongoose from 'mongoose';
import config from 'config';

async function db() {
  console.log('Starting Mongo');
  const dbUri = config.get('dbUri') as string;

  try {
    await mongoose.connect(dbUri).then(() => {
      console.log(`DB connected to ${dbUri}`);
    });
  } catch (e) {
    console.error(e);
  }
}

export default db;
