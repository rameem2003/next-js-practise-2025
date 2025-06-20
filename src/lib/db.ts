import mongoose from "mongoose";
const MONGO_URL = process.env.MONGODB_URL!;

if (!MONGO_URL) {
  throw new Error("MONGODB_URL is not defined");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const dataBaseConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    let res = await mongoose.connect(MONGO_URL);

    res.connection;
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
};
