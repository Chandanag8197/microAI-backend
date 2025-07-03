const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

const userRoutes = require('./routes/users');
const questionRoutes = require('./routes/questions');
const submitRoutes = require('./routes/submit'); // Optional: only if you have /api/submit

dotenv.config(); // Load .env variables

const app = express();

// ✅ CORS: allow local dev and production frontend
app.use(cors({
  origin: ["http://localhost:5173", "https://micro-ai.in"],
  credentials: true,
}));

// Middleware
app.use(express.json());

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api', submitRoutes);

// MongoDB Connection
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
