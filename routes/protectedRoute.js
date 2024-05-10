// backend/routes/protectedRoute.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// GET /api/protected-route
router.get('/', auth, (req, res) => {
  res.send('You accessed a protected route!');
});

module.exports = router;
