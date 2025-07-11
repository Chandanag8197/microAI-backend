const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const Razorpay = require('razorpay');

const userRoutes = require('./routes/users');
const questionRoutes = require('./routes/questions');
const submitRoutes = require('./routes/submit'); // Optional
const paymentRoutes = require('./routes/payment'); // 🔥 Added this

dotenv.config();

const app = express();

// ✅ CORS
app.use(cors({
  origin: ["http://localhost:5173", "https://micro-ai.in"],
  credentials: true,
}));

app.use(express.json());

// 🔐 Razorpay instance setup
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 🆕 Razorpay route
app.post('/api/payment/create-order', async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // ₹ to paise
    currency: "INR",
    receipt: `rcpt_${Date.now()}`,
    payment_capture: 1,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json({ orderId: order.id, amount: order.amount, currency: order.currency });
  } catch (error) {
    console.error('❌ Razorpay Order Error:', error);
    res.status(500).json({ error: 'Failed to create Razorpay order' });
  }
});

// ✅ API Routes
app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api', submitRoutes);
// No change if you don't have /api/payment in separate file

// ✅ MongoDB Connection
const mongoURI = process.env.MONGO_URI || process.env.DB_URL;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// Optional: serve frontend in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'frontend/dist')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
//   });
// });

module.exports = app;
