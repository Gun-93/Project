import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./Routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// ✅ Allow frontend to connect
app.use(
  cors({
    origin: "*", // you can restrict this later to your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

// ✅ MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// ✅ Routes
app.use("/api/users", userRoutes);
console.log("✅ User routes mounted at /api/users");

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running fine!");
});

// ✅ Server listener
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
