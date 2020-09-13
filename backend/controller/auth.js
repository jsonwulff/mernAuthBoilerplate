const User = require('../db/models/User');

// Sign Up without email verification
exports.signup = (req, res) => {
  console.log(req.body)
  const {name, email, password} = req.body
  User.findOne({email})
    .then((user) => {
      if(user) {
        return res.status(400).json({ Error: "User with this email already exists."})
      }
      let newUser = new User({name, email, password})
      newUser.save((err) => {
        if(err) { // Insert second param to get the returned document/db insertion
          console.log("Error in signup", err)
          return res.status(400).json({ Error: err })
        }
        res.json({
          message: "Signup successfull"
        })
      })
    })
    .catch((err) => res.json({Error: err}))
}