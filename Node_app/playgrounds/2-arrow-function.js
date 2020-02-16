// const square = function(x){
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x short hand syntaxe for return only function
// console.log(square(2))

const event = {
    name: 'Birthday',
    guestList : ['Andrew', 'Jen', 'Mike'],
    printGuessList() {
        console.log('guess list for ' + this.name)
        this.guestList.forEach((guest)=> { // es6 methode, array function do not this binding their own
            console.log(guest + " is attending " + this.name)
        })
    }
}

event.printGuessList()