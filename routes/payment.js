const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,     // set in your .env
  key_secret: process.env.RAZORPAY_SECRET  // set in your .env
});

router.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // convert to paise
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
