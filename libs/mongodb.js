import { MongoClient } from "mongodb";

let cachedClient = null;
let cachedDb = null;

const connectMongoDB = async () => {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  let client;
  try {
    client = new MongoClient(process.env.MONGO_URI);

    await client.connect();

    const db = client.db(process.env.MONGO_DB_NAME);

    // Cache the client and db globally for reuse
    cachedClient = client;
    cachedDb = db;

    return { client, db };
  } catch (error) {
    console.log("Error connecting to MongoDB: " + error);
  }
};

export default connectMongoDB;
