// lib/dbConnect.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default dbConnect;
