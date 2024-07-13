import mongoose from 'mongoose';

let isConnected = false;

export const connectTODB = async () => {
  if (isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    console.log('Attempting to connect to MongoDB...');
    console.log('MongoDB URL:', process.env.MONGODB_URL);
 //@ts-ignore
    const db = await mongoose.connect(process.env.MONGODB_URL, {
      dbName:'user',
      serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    });
    isConnected = db.connections[0].readyState === 1;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};
