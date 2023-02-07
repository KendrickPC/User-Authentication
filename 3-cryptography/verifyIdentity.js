const crypto = require('crypto');
const fs = require('fs');
const decrypt = require('./decrypt');

// This is the data that we are receiving from the sender
const receivedData = require('./signMessage').packageOfDataToSend;

// Taking our own hash of the data provided. 
const hash = crypto.createHash(receivedData.algorithm);

// publicKey of the sender
const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

// Decypting data that was signed. 
const decryptedMessage = decrypt.decryptWithPublicKey(publicKey, receivedData.signedAndEncryptedData);

// Translating decyptedMessage into a string value
const decryptedMessageHex = decryptedMessage.toString();

// Taking hash of data, passed from data package...
const hashOfOriginal = hash.update(JSON.stringify(receivedData.originalData));
const hashOfOriginalHex = hash.digest('hex');

if (hashOfOriginalHex === decryptedMessageHex) {
  console.log(`Success! The data has not been tampered with and the sender is validated!`);
} else {
  console.log(`uh oh! Someone is trying to manipulate the data or someone else is signing the document!`);
}