// Importing Path Module
const path = require('path')

// log the platform specific seperator = / - mac ; \ - windows 
console.log(path.sep)

// Join the path 
const filePath = path.join('/content','subfolder', 'text.txt')
console.log(filePath)

// Shows base file 
const base = path.basename(filePath)
console.log(base)

// Get absole path of this file 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)