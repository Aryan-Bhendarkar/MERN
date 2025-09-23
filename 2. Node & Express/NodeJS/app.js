// const peter = "Peter"
// const sayHi = (name) => {
//     console.log(`Hello there, ${name}!`)
// }
// Moved all above things to different folder 
// sayHi("Aryan");
// sayHi(peter);
// Now this will not work as we can't able to access function and variable that moved to other file.


const {john, peter} = require('./4-firstModule') //Importing variables
const names = require('./4-firstModule')         //Importing variables
const sayHi = require('./5-utils')               //Importing function
const data = require('./6-alternativeFlavor')    //Importing Object 
console.log(data)                                // Log the both exports from 6.alternativeFlavor
console.log(data.items)                          // Access the imports from items 
console.log(data.singlePerson)
    
sayHi(john);
sayHi(names.john);
sayHi("Aryan");
sayHi(peter);

