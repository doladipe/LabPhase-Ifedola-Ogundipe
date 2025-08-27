import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected && mongoose.connection.readyState === 1) return;
  if (mongoose.connection.readyState === 1) {
    isConnected = true;
    return;
  }
  await mongoose.connect(process.env.MONGODB_URI, { dbName: "mystore" });
  isConnected = true;
  console.log("Mongodb connected");
}
