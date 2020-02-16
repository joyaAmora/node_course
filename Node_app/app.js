const notes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')


//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // is it required or not
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})
//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // is it required or not
            type: 'string'
        },
        // body: {
        //     describe: 'note body',
        //     demandOption: true,
        //     type: 'string'
        // }
    },
    handler(argv){
        notes.removeNote(argv.title)
        
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler(){
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // is it required or not
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()