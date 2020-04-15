const doWorkCallBack = (callback) => {
    setTimeout(() => {
        //callback('An error', undefined)
        callback(undefined, [1,4,7])
    }, 2000);
}

doWorkCallBack((error, result) => {
    if(error)
        return console.log(error)
    console.log(result)
})

// setTimeout(() => {
//     console.log('two seconds time out')
// }, 2000)

// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter((name) => {
//     return name.length <=4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             lat: 0,
//             long: 0,
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })


// const add = (1,4, (a, b, callback) => {
//     setTimeout(() => {
//         console.log('two seconds time out')
//         callback(a+b)
//     }, 2000)
// })

// add (1,4, (sum) => {
//     console.log(sum)
// })