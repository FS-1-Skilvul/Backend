const crypto = require('crypto');
const SESSION_SECRET_KEY = crypto.randomBytes(16).toString('hex');
console.log(SESSION_SECRET_KEY);