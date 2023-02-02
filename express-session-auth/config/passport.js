const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const User = connection.models.User;
const verifyPassword = require('../lib/passwordUtils').verifyPassword

// Define verified callback for the Passport 'local' strategy
// Usage --> Configure Strategy
// https://www.passportjs.org/packages/passport-local/
passport.use(new LocalStrategy(
  function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

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