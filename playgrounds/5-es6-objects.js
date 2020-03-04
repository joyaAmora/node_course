const name = "Jade"
const userAge = 29

const user = {
    name, // short hand synthax because name === name
    age: userAge, // can't use short hand because age != userAge
    location: "Shawinigan"
}
console.log(user)

//object destructuring
const product = {
    label: "red notebook",
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

const {label : productLabel, stock, rating = 5} = product

console.log(productLabel) // label has been renamed productLabel
console.log(stock)
console.log(rating) //show 5 because there's no variable call rating and we set it up in destructuring wich is consider default

const transaction = (type, {label, stock = 0} = {}) => { // default parameter for the second object if no parameter provide
    console.log(type, label, stock)
}
transaction('order', product)
transaction('order')