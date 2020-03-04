const fs = require('fs')

// const book = {
//     title : 'Ego is the enemy',
//     autor: 'Ryan Holiday'
// }
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json') 
const dataJSON = dataBuffer.toString()
const person = JSON.parse(dataJSON)

    person.name = 'Jade',
    person.age = 29


const personJSON = JSON.stringify(person)
fs.writeFileSync('1-json.json', personJSON)
