console.log('Starting my App');

const myFile =  require('./my-file.js');

console.log(`Message: ${myFile.message}`);

const result = myFile.myFunction();
console.log(result);

const resultSum = myFile.myArrowFunctionSum(1, 2);
console.log(resultSum);

console.log('End my App');