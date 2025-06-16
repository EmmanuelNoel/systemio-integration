const jwt = require('jsonwebtoken');
const config = require('../config/config');

class AuthController {
    async generateToken(req, res) {
        try {

            console.log(req.body);
            const { client_id, client_secret } = req.body;

            if (client_id !== process.env.CLIENT_ID || client_secret !== process.env.CLIENT_SECRET) {
                return res.status(401).json({
                    success: false,
                    error: 'Identifiants invalides'
                });
            }

            const token = jwt.sign(
                { 
                    client_id,
                    type: 'api_token'
                },
                config.jwtSecret,
                { expiresIn: '24h' }
            );

            return res.json({
                success: true,
                token,
                expires_in: 86400 
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
}

module.exports = new AuthController(); 