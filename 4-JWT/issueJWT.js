const base64url = require('base64url')




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