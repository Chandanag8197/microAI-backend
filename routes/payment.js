const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // ✅ Load .env from root

const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();

// 🔍 Debug (optional): Check if keys are loaded correctly
// console.log('RAZORPAY_KEY_ID:', process.env.RAZORPAY_KEY_ID);
// console.log('RAZORPAY_SECRET:', process.env.RAZORPAY_SECRET);

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,     // Must be in .env
  key_secret: process.env.RAZORPAY_KEY_SECRET// Must be in .env
});

router.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // Convert to paise
    currency: "INR",
    receipt: `order_rcptid_${Math.floor(Math.random() * 1000)}`,
    payment_capture: 1
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json({ id: response.id, amount: response.amount, currency: response.currency });
  } catch (err) {
    console.error("Error creating Razorpay order:", err);
    res.status(500).json({ error: "Razorpay order creation failed" });
  }
});

module.exports = router;
