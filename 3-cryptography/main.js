const fs = require('fs')
const encrypt = require('./encrypt')

const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

// Stores a Buffer object
const encryptedMessage = encrypt.encryptWithPublicKey(publicKey, 'Super secret message')

// If you try and "crack the code", you will just get biggerish
console.log("Gibberish::: ", encryptedMessage.toString());