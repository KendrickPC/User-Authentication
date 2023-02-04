const crypto = require('crypto');

// const genPassword = (password) => {
//   return new Promise((resolve, reject) => {
//     crypto.randomBytes(64, (err, buf) => {
//       const salt = buf.toString('hex')
//       const genHash = crypto.pbkdf2(password, salt, 100, 64, 'sha512', (err, key) => {
//         resolve(key.toString('hex'))
//       })

//       return {
//         salt: salt,
//         hash: genHash
//       }
//     })
//   })
// }


function genPassword(password) {
  // Crypto library generating a SALT
  var salt = crypto.randomBytes(32).toString('hex');

  var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  console.log("generateHash:::", genHash);

  return {
    salt: salt,
    hash: genHash
  }
}
function validPassword(password, hash, salt) {
  const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
  return hash === hashVerify;
}


module.exports.genPassword = genPassword;
module.exports.validPassword = validPassword;