const {createReadStream} = require('fs')
// const stream = createReadStream('./content/big.txt') - See <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64 2..... like output 
const stream = createReadStream('./content/big.txt', {highWaterMark: 80000, encoding: 'utf-8'})  //Get original result with encoded values 

// Default 64kb data chunks + last buffer will be remainder 
// highWaterMark - Control the size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
// const stream = createReadStream('./content/big.txt', {encoding: 'utf 8'})


stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => {
    console.log(err)  // get error details
})
