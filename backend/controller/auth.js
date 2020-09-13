const User = require('../db/models/User');
const bcrypt = require('bcryptjs');

// Sign Up without email verification
exports.signup = (req, res) => {
  console.log(req.body)
  const {name, email, password} = req.body
  User.findOne({email})
    .then((user) => {
      if(user) {
        return res.status(400).json({ Error: "User with this email already exists."})
      }
      const newUser = new User({name, email, password})

      // Hash Password  before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) {
            console.log("Error hashing the password: ", err)
          }
          newUser.password = hash
          newUser.save((err, user) => {
            if(err) {
              console.log("Error in signup", err)
              return res.status(400).json({ Error: err })
            }
            res.json({
              message: "Signup successfull",
              user
            })
          })
        })
      })

    })
    .catch((err) => res.json({Error: err}))
}