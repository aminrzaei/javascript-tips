// Require jsonwebtoken library
const jwt = require('jsonwebtoken');

const token = jwt.sign({ name: 'amin', age: 23 }, 'somthing-secret', {
  expiresIn: '1h',
});
console.log(token);

/* More Safe */
const verified = jwt.verify(token, 'somthing-secret');
console.log(verified);

/* More Safe With header and payload */
const verifiedComplete = jwt.verify(token, 'somthing-secret', {
  complete: true,
});
// console.log(verifiedComplete);

/* Not Safe */
const decoded = jwt.decode(token);
// console.log(decoded);

/* Not Safe With header and payload */
const decodedComplete = jwt.decode(token, { complete: true });
// console.log(decodedComplete);
