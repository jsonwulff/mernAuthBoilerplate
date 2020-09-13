const User = require("../db/models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Sign Up without email verification
// exports.signup = (req, res) => {
//   console.log(req.body)
//   const {name, email, password} = req.body
//   User.findOne({email})
//     .then((user) => {
//       if(user) {
//         return res.status(400).json({ Error: "User with this email already exists."})
//       }
//       const newUser = new User({name, email, password})

//       // Hash Password  before saving in database
//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if(err) {
//             console.log("Error hashing the password: ", err)
//           }
//           newUser.password = hash
//           newUser.save((err, user) => {
//             if(err) {
//               console.log("Error in signup", err)
//               return res.status(400).json({ Error: err })
//             }
//             res.json({
//               message: "Signup successfull",
//               user
//             })
//           })
//         })
//       })

//     })
//     .catch((err) => res.json({Error: err}))
// }

// Sign Up without email verification
exports.signup = (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        return res
          .status(400)
          .json({ Error: "User with this email already exists." });
      }

      const token = jwt.sign(
        { name, email, password },
        process.env.JWT_SIGNUP_SECRET,
        { expiresIn: "20m" }
      );

      const msg = {
        to: "julianwulff@gmail.com", // ! This should be changed - only for testing purposes
        from: `${process.env.SENDER_EMAIL}`, // ! This should be change - only for testing purposes
        subject: "Account Activation Link",
        text: `and easy to do anywhere, even with Node.js`,
        html: `
          <h2>Please click on the given link to activate your account</h2>
          <p>${process.env.CLIENT_URL}/authenticate/activate/${token}</p>
          `,
      };

      sgMail.send(msg, (err, result) => {
        if (err) {
          return res.json({ Mailerror: err });
        }
        return res.json({
          message: "Email has been sent, kindly activate your account",
        });
      });
    })
    .catch((err) => res.json({ FindOneError: err }));
};
