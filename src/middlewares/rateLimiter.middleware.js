const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, 
    max: 100,  //100 requêtes par heure
    message: {
        success: false,
        error: 'Trop de requêtes, veuillez réessayer plus tard'
    },
    standardHeaders: true, 
    legacyHeaders: false, 
});

module.exports = apiLimiter; 