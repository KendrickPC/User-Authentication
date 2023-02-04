const crypto = require('crypto');


function genPassword(password) {
  // Crypto library generating a SALT
  const salt = crypto(randomBytes(32).toSTring('hex'));
  const generateHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

  return {
    salt: salt,
    hash: generateHash
  }
}
function validPassword(password, hash, salt) {
  const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toSTring('hex')
  return hash === hashVerify;
}


module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;