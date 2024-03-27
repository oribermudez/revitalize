import mongoose from 'mongoose';

let cachedConnection = null;

const connectMongo = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }
  try {
    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI) {
      throw new Error('MONGO_URI is not defined');
    }

    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cachedConnection = await mongoose.connect(MONGO_URI, opts);
    console.log('MongoDB connected');
    return cachedConnection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectMongo;