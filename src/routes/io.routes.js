const express = require('express');
const router = express.Router();
const ioController = require('../controllers/io.controller');
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/contacts', authMiddleware, ioController.createContact);
router.get('/tags', authMiddleware, ioController.getTags);
router.get('/tags/:tagId', authMiddleware, ioController.getTagById);

module.exports = router; 