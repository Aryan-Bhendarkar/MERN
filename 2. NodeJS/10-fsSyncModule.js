
// Importing File-System Module
const {readFileSync, writeFileSync, readFile} = require('fs');
// const fs = require('fs'); same-same 

// Reading file through fs module - Synchronously
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second) //content of file 1 and 2 

// Write a file 
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});