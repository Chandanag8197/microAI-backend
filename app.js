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

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api', submitRoutes); // POST /api/submit — for evaluation

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || process.env.DB_URL;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// ✅ Serve frontend (Vite) in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'frontend/dist')));

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
//   });
// }

// Start server
const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

module.exports = app; // Export for testing
