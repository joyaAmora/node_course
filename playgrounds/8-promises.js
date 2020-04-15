const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000)
    })
}

add(1,2).then((sum) => {
    console.log(sum)
    return add(sum, 3) //chaining promises instead calling everything twice and no nested function
}).then((sum2)=> {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve([1,4,7])
//         reject('It went wrong!')
//     }, 2000);
// })

// doWorkPromise.then((result) => {
//     console.log('Success', result)
// }).catch((error) => {
//     console.log('Error!', error)
// })