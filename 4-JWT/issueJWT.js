const base64url = require('base64url')

const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// 1. Converting JWT into something we can actually work with
const jwtParts = JWT.split('.')
// console.log(jwtParts);

const headerInBase64UrlFormat = jwtParts[0];
const payloadInBase64UrlFormat = jwtParts[1];
const signatureInBase64UrlFormat = jwtParts[2];

console.log("header", headerInBase64UrlFormat);
console.log("payload", payloadInBase64UrlFormat);
console.log("signature", signatureInBase64UrlFormat);