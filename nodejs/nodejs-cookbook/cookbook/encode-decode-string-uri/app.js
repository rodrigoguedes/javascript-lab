const nameParam = 'Rodrigo Guedes de Souza';
const encodedName = encodeURIComponent(nameParam);
console.log(encodedName);

const encodedText = '%3Fx%3Dtest';
const textPlain = decodeURIComponent(encodedText);
console.log(textPlain);