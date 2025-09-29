const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    // This method suitable for transfering small data, not useful for big data
    // const readFile = fs.readFileSync('./content/big.txt');
    // res.end(readFile);

    const readFileStream = fs.createReadStream('./content/big.txt', {encoding: 'utf-8'});
    readFileStream.on('data', () => {
        readFileStream.pipe();
    })
    readFileStream.on('error', (err) => {
        res.end(err);
    })
})
.listen(5000)