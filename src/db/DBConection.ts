import mongoose from 'mongoose';
const MONGO_URI = process.env.MONGO_URI;

const DBConnect = async () => {
  mongoose.set('strictQuery', false);
  try {
    const { connection } = await mongoose.connect(`${MONGO_URI}`);
    if (connection.readyState === 1) return Promise.resolve(true);
  } catch (err) {
    return Promise.reject(err);
  }
};
export default DBConnect;
