const fs = require('fs');

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (error) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }

    // var duplicatesNotes = notes.filter((note) => note.title === title);
    // if (duplicatesNotes.length === 0) {
    var noteFound = getNote(note.title);
    if (!noteFound) {
        console.log('Adding note', title, body);
        notes.push(note);
        saveNotes(notes);
        return note;
    } 
}

var getAll = () => {
    console.log('Getting all notes');
    return fetchNotes();
}

var getNote = (title) => {
    console.log('Getting note', title);
    var notes = fetchNotes();
    var filteredNote = notes.filter((note) => note.title === title);
    return filteredNote[0];
}

var removeNote = (title) => {
    console.log('Removing note', title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}