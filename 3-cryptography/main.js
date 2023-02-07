const fs = require('fs')
const encrypt = require('./encrypt')
const decrypt = require('./decrypt')

const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

// Stores a Buffer object
const encryptedMessage = encrypt.encryptWithPublicKey(publicKey, 'Super secret messages sent via SLACK')

// If you try and "crack the code", you will just get biggerish
// This is what we will transter over any insecure transport layer.
console.log("Gibberish::: ", encryptedMessage.toString());

const privateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf8');

const decryptedMessage = decrypt.decryptWithPrivateKey(privateKey, encryptedMessage)

// Convert the Buffer to a string and print the message.
console.log(decryptedMessage.toString());



