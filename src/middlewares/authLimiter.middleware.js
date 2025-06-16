const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, 
    max: 5, // 5 requêtes par heures
    message: {
        success: false,
        error: 'Trop de tentatives d\'authentification, veuillez réessayer plus tard'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = authLimiter; 