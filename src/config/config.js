require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    systemIoApiKey: process.env.SYSTEM_IO_API_KEY,
    systemIoBaseUrl: 'https://api.systeme.io/api/',
    jwtSecret: process.env.JWT_SECRET,
    tags: {
        'KYC non validé': 1473959,
        'Inactif 2 mois': 1473593,
        'Inactif 30j après KYC valide': 1473589,
        'Inactif 7j après KYC valide': 1473588,
        '1ère transaction effectuée': 1473587,
        'KYC Validé': 1473585,
        'Relance KYC +30j': 1473584,
        'Relance KYC +24h': 1473581,
        'Relance KYC +14j': 1473571,
        'Relance KYC +7j': 1473570,
        'Inscrit': 1456057
    }
}; 