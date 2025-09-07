import express from "express";
import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

//register 
router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, password} = req.body;

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      phone,
      password: hashedPassword,
     
    });

    await user.save();

    res.status(201).json({
      message: "✅ User registered successfully",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


//Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login request body:", req.body);

    // Check user exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    console.log("User found:", user.email);

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Debug JWT
    console.log("JWT Secret in use:", process.env.JWT_SECRET);

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "1h" }
    );

    res.json({
      message: "✅ Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


export default router;



