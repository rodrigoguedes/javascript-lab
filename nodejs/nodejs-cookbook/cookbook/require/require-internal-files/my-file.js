console.log('Starting my File');

// console.log(module);

module.exports.message = 'This is my message';

module.exports.myFunction = function () {
    console.log('Running my function');
    return 'return of my function';
}

module.exports.mySimpleArrowFunction = () => {
    console.log('Running my simple arrow function');
    return 'return of my simple arrow function';
};

module.exports.myArrowFunctionSum = (value1, value2) => {
    return value1 +  value2;
};

console.log('End my File');