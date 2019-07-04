var obj = {
    name: 'Rodrigo Guedes de Souza'
};
console.log(typeof obj);
console.log('Object:', obj);
console.log('============================================================');

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log('Stringify result:', stringObj);
console.log('============================================================');

var personString = '{"name": "Rodrigo Guedes de Souza", "age": 37}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log('String:', personString);
console.log('Parse result:', person);
console.log('============================================================');