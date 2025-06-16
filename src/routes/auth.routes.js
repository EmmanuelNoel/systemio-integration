const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authLimiter = require('../middlewares/authLimiter.middleware');

// Route publique pour l'authentification avec protection
router.post('/token', authLimiter, authController.generateToken);

module.exports = router; 