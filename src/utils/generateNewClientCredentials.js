const crypto = require('crypto');

const clientId = crypto.randomBytes(16).toString('hex');

const clientSecret = crypto.randomBytes(32).toString('hex');

console.log('\n=== NOUVEAUX IDENTIFIANTS CLIENT ===\n');
console.log('CLIENT_ID:', clientId);
console.log('CLIENT_SECRET:', clientSecret);
