const crypto = require('crypto');

// Générer JWT_SECRET (clé de signature)
const jwtSecret = crypto.randomBytes(64).toString('hex');

// Générer CLIENT_ID (identifiant de l'application)
const clientId = crypto.randomBytes(16).toString('hex');

// Générer CLIENT_SECRET (secret de l'application)
const clientSecret = crypto.randomBytes(32).toString('hex');

console.log('\n=== CLÉS GÉNÉRÉES ===\n');

console.log('1. JWT_SECRET (pour signer les tokens) :');
console.log(jwtSecret);
console.log('\n2. CLIENT_ID (identifiant de l\'application) :');
console.log(clientId);
console.log('\n3. CLIENT_SECRET (secret de l\'application) :');
console.log(clientSecret);

console.log('\n=== CONFIGURATION .env ===\n');
console.log(`JWT_SECRET=${jwtSecret}`);
console.log(`CLIENT_ID=${clientId}`);
console.log(`CLIENT_SECRET=${clientSecret}`); 