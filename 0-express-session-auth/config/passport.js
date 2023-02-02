const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const User = connection.models.User;
const validPassword = require('../lib/passwordUtils').validPassword

const customFields = {
  usernameField: 'uname',
  passwordField: 'pw'
}

// Define verified callback for the Passport 'local' strategy
// Usage --> Configure Strategy
// https://www.passportjs.org/packages/passport-local/
passport.use(new LocalStrategy(
  function (username, password, done) {
    User.findOne({ username, password }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.validPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

// const verifyCallback = (username, password, done) => {
//   User.findOne({ username: username })
//     .then((user) => {
//       if (!user) { return done(null, false) }

//       const isValid = validPassword(password, user.hash, user.salt)
//       if (isValid) {
//         return done(null, user);
//       } else {
//         return done(null, false);
//       }
//     })
//     .catch((err) => {
//       done(err)
//     })
// }

// https://www.passportjs.org/concepts/authentication/downloads/html/
// To maintain a login session, Passport serializes and deserializes user information to and from the session. 
// The information that is stored is determined by the application, which supplies a serializeUser and a deserializeUser function.
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, {
      id: user.id,
      username: user.username,
      picture: user.picture
    });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

// passport.deserializeUser(function (id, done) {
//   masterUser.findOne({ where: { id: id } }).then((user) => {
//     done(null, user);
//   });
// });