const express = require('express');
const router = express.Router();

// Create routes here
router.get('/', (req, res) => {
  // Send back a response to the client
  res.json({ message: 'Welcome to our Community skil share platform API' });
});

module.exports = router;