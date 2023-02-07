const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const fs = require('fs');
const encrypt = require('./encrypt')
const decrypt = require('./decrypt')

const myData = {
  firstName: 'Kenjamin',
  lastName: 'Button',
  socialSecurityNumber: 'NEVER EVER PUT PERSONAL INFORMATION into a digitally signed message b/c this form of cryptography DOES NOT hide data!',
};

