import mongoose from 'mongoose';

const databaseConnect = async () => {
  const url = process.env.CONNECTION_STRING;
  try {
    await mongoose.connect(url);
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Database connection failed', error);
  }
};

export default databaseConnect;
