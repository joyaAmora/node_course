const fs = require('fs')
const chalk = require ('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
    
        saveNotes(notes)
        console.log(chalk.bgGreen('new note added'))
    }
    else
        console.log(chalk.bgRed('note title taken'))
    

};

const removeNote = (title) => {
    const notes = loadNotes()
    const keptNotes = notes.filter(function(note){
        return note.title !== title(() => note.title !== title)         
    })
    if(notes.length > keptNotes.length){
        console.log(chalk.bgGreen('Note removed'))
        saveNotes(keptNotes)
    }
    else
        console.log(chalk.bgRed('No note found'))
    console.log(title)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach((note)=> {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.blue(note.title))
        console.log(note.body)
    }
    else  
        console.log(chalk.red('Note not found'))
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e) {
        return []
    }
    
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}