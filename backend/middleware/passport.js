const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../models/User');
const { JWT_AUTH_SECRET } = process.env;

var opts = {};

opts.jwtFromRequest = (req) => {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies['token'];
  }
  return token;
};
opts.secretOrKey = JWT_AUTH_SECRET;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => {
          console.log(err);
          return done(err, false);
        });
    })
  );
};
