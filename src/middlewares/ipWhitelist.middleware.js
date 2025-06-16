const config = require('../config/config');

const ipWhitelist = (req, res, next) => {
    const clientIP = req.ip || req.connection.remoteAddress;
    
    const allowedIPs = process.env.ALLOWED_IPS ? process.env.ALLOWED_IPS.split(',') : [];
    
    if (allowedIPs.length === 0) {
        return next();
    }

    if (!allowedIPs.includes(clientIP)) {
        return res.status(403).json({
            success: false,
            error: 'Accès non autorisé depuis cette IP'
        });
    }

    next();
};

module.exports = ipWhitelist; 