const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const fs = require('fs');
const encrypt = require('./encrypt')
const decrypt = require('./decrypt')



// Taking data and compressing it into a sha256 hash.
const myData = {
  firstName: 'Kenjamin',
  lastName: 'Button',
  socialSecurityNumber: 'NEVER EVER PUT PERSONAL INFORMATION into a digitally signed message b/c this form of cryptography DOES NOT hide data!',
};

// JSON string version of our data that can be hashed
const myDataString = JSON.stringify(myData);

// Sets the value on the hash object: requires string format, so we must convert our string to hash data
hash.update(myDataString);

// Hashed data in the Hexidecimal format;
const hashedData = hash.digest('hex');

// Gaining access to private key we created
const senderPrivateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf8');

// Storing signed version of message/data into a variable
const signedMessage = encrypt.encryptWithPrivateKey(senderPrivateKey, hashedData);

const packageOfDataToSend = {
  algorithm: 'sha256',
  originalData: myData,
  signedAndEncryptedData: signedMessage,
}

module.exports.packageOfDataToSend = packageOfDataToSend;
