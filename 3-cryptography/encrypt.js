const crypto = require('crypto')

// If we want to protect data (but not the identity), we encrypt with the public key and decrypt with the private key
function encryptWithPublicKey(publicKey, message) {
  // Creating node Buffer with utf8 formating
  const bufferMessage = Buffer.from(message, 'utf8')
  // Passing Buffer into public key encrypt func provided by node crypto library
  return crypto.publicEncrypt(publicKey, bufferMessage)
}

module.exports.encryptWithPublicKey = encryptWithPublicKey