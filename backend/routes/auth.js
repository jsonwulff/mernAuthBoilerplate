const express = require('express');
const router = express.Router();
// Import controller
const {
  signup,
  activateAccount,
  login,
  isAuthenticated,
} = require('../controller/auth');

router.post('/signup', signup);
router.post('/activate-email/:token', activateAccount);
router.post('/login/', login);
router.get('/isAuthenticated', isAuthenticated);

module.exports = router;
