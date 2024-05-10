// backend/middleware/auth.js
const jwt = require('jsonwebtoken');
const config = require('config');

const auth = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if token exists
  if (!token) {
    return res.status(401).json({ msg: 'Authorization denied. Token missing.' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // Add user from payload
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Authorization denied. Invalid token.' });
  }
};

module.exports = auth;
