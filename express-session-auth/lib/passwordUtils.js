const crypto = require('crypto');

// TODO
// generatePassword is basically REGISTRATION of user
function genPassword(password) {
  const salt = crypto.randomBytes(32).toString('hex');
  const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

  return {
    salt: salt,
    hash: genHash
  }
}

// verifyPassword is basically LOGIN of user
function verifyPassword(password, hash, salt) {
  const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return hash === hashVerify;
}

module.exports.genPassword = genPassword;
module.exports.verifyPassword = verifyPassword;
