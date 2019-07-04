const _ = require('lodash');

console.log('Rodrigo is String?', _.isString('Rodrigo'));
console.log('True is String?',_.isString(true));

const filteredArray = _.uniq(['Rodrigo', 1, 'Rodrigo', 1, 2, 3, 4])
console.log(_.uniq(filteredArray));
