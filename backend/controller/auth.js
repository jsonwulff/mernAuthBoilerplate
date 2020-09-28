const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sgMail = require('@sendgrid/mail');
const jwt_decode = require('jwt-decode');

const validateSignUpInput = require('../validation/signup');
const validateLoginInput = require('../validation/login');
const validateEmail = require('../validation/email');
const validatePassword = require('../validation/password');

const {
  SENDGRID_API_KEY,
  JWT_SIGNUP_SECRET,
  JWT_AUTH_SECRET,
  SENDER_EMAIL,
  CLIENT_URL,
} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

// Sign up - send activation email
exports.signup = (req, res) => {
  const { errors, isValid } = validateSignUpInput(req.body);
  if (!isValid) return res.status(400).json(errors);

  const { firstName, lastName, email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        return res.status(400).json({ email: 'Email already exists' });
      }

      // Create User
      const newUser = new User({ firstName, lastName, email, password });
      // Hash Password  before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            return res.status(400).json({ Error: err });
          }
          // Save user
          newUser.password = hash;
          newUser.save((err, user) => {
            if (err) {
              return res.status(400).json({ Error: err });
            }
            const token = jwt.sign({ id: user._id }, JWT_SIGNUP_SECRET, {
              expiresIn: '1m',
            });

            const msg = {
              to: 'julianwulff@gmail.com', // ! This should be changed - only for testing purposes
              from: `${SENDER_EMAIL}`, // ! This should be change - only for testing purposes
              subject: 'Account Activation Link',
              text: `Please click on the given link to activate your account: ${CLIENT_URL}/auth/verify-email/${token}`,
              html: `
                <h2>Please click on the given link to activate your account</h2>
                <a href="${CLIENT_URL}/auth/verify-email/${token}">Click to verify email</a>
                `,
            };

            sgMail.send(msg, (err, result) => {
              if (err) {
                return res.json({ Error: err });
              }
              return res.json({
                message: 'Signup successfull. An Email has been sent to activate your account',
              });
            });
          });
        });
      });
    })
    .catch((err) => res.json({ Error: err }));
};

// Resend activation link
exports.resendVerificationEmail = (req, res) => {
  console.log(req.body);
  const { id } = jwt_decode(req.body.token);
  // console.log(jwt_decode(token));
  User.findById(id)
    .then((user) => {
      if (!user) {
        return res.status(400).json({ email: 'User does not exists' });
      }

      const token = jwt.sign({ id }, JWT_SIGNUP_SECRET, {
        expiresIn: '1d',
      });

      const msg = {
        to: 'julianwulff@gmail.com', // ! This should be changed - only for testing purposes
        from: `${SENDER_EMAIL}`, // ! This should be change - only for testing purposes
        subject: 'Account Activation Link',
        text: `Please click on the given link to activate your account: ${CLIENT_URL}/auth/verify-email/${token}`,
        html: `
          <h2>Please click on the given link to activate your account</h2>
          <a href="${CLIENT_URL}/auth/verify-email/${token}">Click to verify email</a>
          `,
      };

      sgMail.send(msg, (err, result) => {
        if (err) {
          return res.json({ Error: err });
        }
        return res.json({
          message: 'An Email has been sent to activate your account',
        });
      });
    })
    .catch((err) => res.json({ Error: err }));
};

// Verify email
exports.verifyEmail = (req, res) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, JWT_SIGNUP_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(400).json({ Error: 'Incorrect or expired link.' });
      }

      const { id } = decodedToken;
      User.findByIdAndUpdate(id)
        .then((user) => {
          if (user.confirmed === true) {
            return res.json({ message: 'Email has already been confirmed' });
          }
          user.confirmed = true;
          user
            .save()
            .then(() => res.json({ message: 'Email was confirmed' }))
            .catch((err) => res.status(400).json({ Error: err }));
        })
        .catch((err) => res.status(400).json({ Error: 'User with that mail not found' }));
    });
  } else {
    return res.status(400).json({ Error: 'Token was missing' });
  }
};

// Login
exports.login = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) return res.status(400).json(errors);

  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(400).json({ email: 'User with that email not found' });
      }

      if (!user.confirmed) {
        return res.status(400).json({ email: 'Email has not been confirmed' });
      }

      bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch) return res.status(400).json({ password: 'Incorrect password' });

        const payload = { id: user.id };
        const token = jwt.sign(payload, JWT_AUTH_SECRET, { expiresIn: '1d' });
        res.cookie('token', token, { httpOnly: true }).json({ message: 'Login sucessfull' });
      });
    })
    .catch((err) => res.json({ Error: err }));
};

// Check if the user is authenticated
exports.authenticated = (req, res) => {
  token = req.cookies['token'];
  jwt.verify(token, JWT_AUTH_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(400).clearCookie('token').json({ authenticated: false });
    }

    User.findById(decodedToken.id).then((user) => {
      if (!user) {
        return res.status(400).clearCookie('token').json({ authenticated: false });
      }

      // Check that password IAT is older than token IAT
      const passwordIAT = new Date(user.passwordIAT).getTime() / 1000;
      if (passwordIAT > decodedToken.iat) {
        return res.status(400).clearCookie('token').json({ authenticated: false });
      }

      res.json({ authenticated: true });
    });
  });
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  return res.json({ message: 'Cookie cleared - user is logged out' });
};

exports.forgotPassword = (req, res) => {
  const { email } = req.body;
  const { errors, isValid } = validateEmail(email);
  if (!isValid) return res.status(400).json(errors);

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(400).json({ email: 'User with that email not found' });
      }

      const token = jwt.sign({ id: user._id }, JWT_SIGNUP_SECRET, {
        expiresIn: '30m',
      });

      const msg = {
        to: 'julianwulff@gmail.com', // ! This should be changed - only for testing purposes
        from: `${SENDER_EMAIL}`, // ! This should be change - only for testing purposes
        subject: 'Reset password',
        text: `Please click on the given link to reset your password: ${CLIENT_URL}/reset-password/${token}`,
        html: `
          <h2>Please click on the given link to reset your password</h2>
          <a href="${CLIENT_URL}/auth/reset-password/${token}">Click to reset password</a>
          `,
      };

      sgMail.send(msg, (err, result) => {
        if (err) {
          return res.json({ Error: err });
        }
        return res.json({
          message: 'Email has been sent with password reset link',
        });
      });
    })
    .catch((err) => res.json({ Error: err }));
};

exports.resetPassword = (req, res) => {
  console.log(res.body);
  const { errors, isValid } = validatePassword(req.body);
  if (!isValid) return res.status(400).json(errors);

  const token = req.body.token;
  jwt.verify(token, JWT_SIGNUP_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(400).json({ error: 'Reset link expired' });
    }

    const { id } = decodedToken;
    User.findByIdAndUpdate(id)
      .then((user) => {
        const passwordIAT = new Date(user.passwordIAT).getTime() / 1000;
        if (passwordIAT > decodedToken.iat) {
          return res.status(400).json({ error: 'Password already reset' });
        }

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            user.password = hash;
            user.passwordIAT = Date.now();
            user
              .save()
              .then(() => res.json({ message: 'Password succesfully reset' }))
              .catch((err) => res.status(400).json({ Error: err }));
          });
        });
      })
      .catch((err) => res.json({ Error: err }));
  });
};
