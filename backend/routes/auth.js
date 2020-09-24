const express = require('express');
const router = express.Router();
// Import controller
const {
  signup,
  activateAccount,
  login,
  isAuthenticated,
  logout,
  forgotPassword,
  resetPassword,
} = require('../controller/auth');

router.post('/signup', signup);
router.post('/activate-email/', activateAccount);
router.post('/login/', login);
router.get('/isAuthenticated', isAuthenticated);
router.get('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;
