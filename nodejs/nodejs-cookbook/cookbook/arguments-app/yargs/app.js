// Commands:
// node app.js add --title=secret --body="This is my secret"
// node app.js list
// node app.js read --title=secret
// node app.js remove --title=secret
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias:  't'
}

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias:  'b'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

console.log('Yargs', argv);
console.log('App arguments', argv._);

var command = argv._[0];
console.log('Command: ', command);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}
