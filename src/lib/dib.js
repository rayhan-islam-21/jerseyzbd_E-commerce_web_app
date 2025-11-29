require("dotenv").config({ path: ".env.local" }); // explicitly load .env.local
// src/lib/dib.js
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env.local");
    }

    if (mongoose.connection.readyState >= 1) return; // already connected

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "jerseyzbd",
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    throw error;
  }
};

