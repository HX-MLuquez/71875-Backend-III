const generatePassword = require('lib-generate-code');

const pass1 = generatePassword(12, 'human2'); // Más aleatorio
const pass2 = generatePassword(14, 'human5');

console.log(pass1); // -> cc9soUb=@S77
console.log(pass2); // -> uzabhrv0wouhzt