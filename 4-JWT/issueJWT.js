const base64url = require('base64url');
const crypto = require('crypto');
const signatureFunction = crypto.createSign('RSA-SHA256')
const fs = require('fs');

// We don't need the code below - we want to derive the JWT from scratch.
/*
const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// 1. Converting JWT into something we can actually work with
const jwtParts = JWT.split('.')
// console.log(jwtParts);

const headerInBase64UrlFormat = jwtParts[0];
const payloadInBase64UrlFormat = jwtParts[1];
const signatureInBase64UrlFormat = jwtParts[2];

// Testing that the split of JWT token works as intended.
// console.log("header", headerInBase64UrlFormat);
// console.log("payload", payloadInBase64UrlFormat);
// console.log("signature", signatureInBase64UrlFormat);

// JSON objects of base64url format above.
const decodedHeader = base64url.decode(headerInBase64UrlFormat)
const decodedPayload = base64url.decode(payloadInBase64UrlFormat)
const decodedSignature = base64url.decode(signatureInBase64UrlFormat)


// Testing the decoded header, payload, and signature works as intended
console.log(decodedHeader);
console.log(decodedPayload);
// Signature has not been decrypted YET...
console.log(decodedSignature);
*/

const headerObj = {
  alg: 'RS256',
  typ: 'JWT'
};

const payloadObj = {
  sub: '1234567890',
  name: 'John Doe',
  admin: true,
  iat: 1516239022
};

const headerObjString = JSON.stringify(headerObj);
const payloadObjString = JSON.stringify(payloadObj);

// console.log(typeof headerObjString, headerObjString);
// console.log(typeof payloadObjString, payloadObjString);

// Converting JSON string format into base64url
const base64UrlHeader = base64url(headerObjString)
const base64UrlPayload = base64url(payloadObjString)

// console.log(base64UrlHeader);
// console.log(base64UrlPayload);

// Signing and issuing the JWT
// Take the hash of the base64url header & payload data, sign that has, and put that signed has into the signature
// this is the data that is ACTUALLY hashed using the SHA256 hashing function. All done in the node crypto library.
// Hashing the data, then signing the hash.
signatureFunction.write(base64UrlHeader + '.' + base64UrlPayload);
signatureFunction.end()

const PRIV_KEY = fs.readFileSync(__dirname + '/priv_key.pem', 'utf8');
// Signing the data giving us a base64 encoded signature.
const signatureBase64 = signatureFunction.sign(PRIV_KEY, 'base64');

// To actually get the JWT, we need to convert base64 to base64url
// We can do this with the npm library base64url
const signatureBase64Url = base64url.fromBase64(signatureBase64);
console.log("signatureBase64Url::: ", signatureBase64Url);


