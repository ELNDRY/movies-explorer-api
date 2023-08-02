const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, // limit each IP to 100 requests per 'window' - per 15 mins
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = limiter;
