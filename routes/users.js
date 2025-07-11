const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middleware/authenticate'); // ✅ Import JWT middleware

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/forgot-password', userController.forgotPassword);

// 🔐 Protected route: Get current user
router.get('/me', authenticate, userController.getProfile);

module.exports = router;
