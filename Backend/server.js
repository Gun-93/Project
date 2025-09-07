import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./Routes/userRoutes.js"; 

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// ✅ MongoDB connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err.message));

// ✅ Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running fine!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});





