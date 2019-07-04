// node simple-arguments add

var command = process.argv[2];

console.log('-----------------------------------------');
console.log(process.argv);
console.log('-----------------------------------------');

if (command === 'add') {
    console.log('Adding new note');
} else if(command === 'list') {
    console.log('Listing all notes');
} else {
    console.log('Command no recognized');
}