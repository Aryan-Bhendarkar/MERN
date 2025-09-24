// NPM - Node Package Manager || install automatically when we install node
// Package - Reusable file with JS code 

// Ḷocal Dependencies - use only in a particular project 
// npm i <package-name>

// Global Dependancies - use it in any project 
// npm install -g <package-name>
// sudo install -g <package-name> (for mac)


// package.json - manifest file (store important info about project/package)
// - manual approach 
// - npm.init - step by step process
// - npm init -y - everything default 


// Importing external package || Lodash - JavaScript utility library that makes it easier to work with arrays, objects, strings, and functions.
const _ = require('lodash')

// Flatten the array 
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items) // Flatten the array 
console.log(newItems)

