const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sgMail = require('@sendgrid/mail');

const {
  SENDGRID_API_KEY,
  JWT_SIGNUP_SECRET,
  SENDER_EMAIL,
  CLIENT_URL,
} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

// Sign up - send activation email
exports.signup = (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        return res
          .status(400)
          .json({ Error: 'User with this email already exists.' });
      }

      // Create User
      const newUser = new User({ name, email, password });
      // Hash Password  before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            console.log('Error hashing the password: ', err);
          }
          // Save user
          newUser.password = hash;
          newUser.save((err, user) => {
            if (err) {
              console.log('Error in signup', err);
              return res.status(400).json({ Error: err });
            }
            const token = jwt.sign({ id: user._id }, JWT_SIGNUP_SECRET, {
              expiresIn: '1d',
            });

            const msg = {
              to: 'julianwulff@gmail.com', // ! This should be changed - only for testing purposes
              from: `${SENDER_EMAIL}`, // ! This should be change - only for testing purposes
              subject: 'Account Activation Link',
              text: `Please click on the given link to activate your account: ${CLIENT_URL}/authenticate/activate/${token}`,
              html: `
                <h2>Please click on the given link to activate your account</h2>
                <p>${CLIENT_URL}/authenticate/activate/${token}</p>
                `,
            };

            sgMail.send(msg, (err, result) => {
              if (err) {
                return res.json({ Error: err });
              }
              return res.json({
                message: 'Signup succesfull. An Email has been sent, kindly activate your account',
              });
            });
          });
        });
      });
    })
    .catch((err) => res.json({ Error: err }));
};

// Activate account
exports.activateAccount = (req, res) => {
  const token = req.params.token;

  if (token) {
    jwt.verify(token, JWT_SIGNUP_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(400).json({ Error: 'Incorrect or expired link.' });
      }

      const { id } = decodedToken;
      User.findByIdAndUpdate(id)
        .then((user) => {
          if(user.confirmed === ture){
            return res.status(400).json({Error: "Email has already been confirmed"})
          }
          user.confirmed = true
          user
            .save()
            .then(() => res.json({message: "Email was confirmed"}))
            .catch((err) => res.status(400).json({ Error: err }));
        })
        .catch((err) => res.json({ Error: err }));
    });
  } else {
    return res.status(400).json({ Error: 'Token was missing' });
  }
};
