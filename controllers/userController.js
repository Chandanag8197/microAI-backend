// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password, rememberMe } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const expiry = rememberMe ? '7d' : '1d'; // 🔁 extend session if "remember me"

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: expiry });

    res.json({
      token,
      name: user.name,
      email: user.email,
      id: user._id,
      expiresIn: expiry
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Forgot Password (placeholder)
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    res.json({ message: "If this email exists, a reset link will be sent." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
