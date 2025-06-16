const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const config = require('./config/config');
const ioRoutes = require('./routes/io.routes');
const authRoutes = require('./routes/auth.routes');
const rateLimiter = require('./middlewares/rateLimiter.middleware');
const ipWhitelist = require('./middlewares/ipWhitelist.middleware');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(ipWhitelist); 
app.use(rateLimiter); 

app.use('/api', ioRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        error: 'Une erreur est survenue sur le serveur'
    });
});

app.listen(config.port, () => {
    console.log(`Serveur démarré sur le port ${config.port}`);
}); 