const express = require('express');
const router = express.Router();
// Import controller
const {
  signup,
  verifyEmail,
  resendVerificationEmail,
  login,
  authenticated,
  logout,
  forgotPassword,
  resetPassword,
} = require('../controller/auth');

router.post('/signup', signup);
router.post('/verify-email', verifyEmail);
router.post('/resend-verification-email', resendVerificationEmail);
router.post('/login', login);
router.get('/authenticated', authenticated);
router.get('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;
