const express = require('express');
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')

//  req => middleware => res

// If we have 10-15 such pages and want same information, then we have to do same thing multiple time. else we will make function of it 
// app.get('/', (req, res) => {
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear()
//     console.log(method, url, time)
//     res.send('Home')
// })

// Middleware 
// const logger = (req, res, next) => {
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time)
//     // always pass next middleware 
//     // res.send('Testing')
//     next() 
// } - moved to logger.js to make code looks clean

// Very time consumming approach to add logger function in everywhere 
// app.get('/', logger, (req, res) => {
//     res.send('Home')
// })

// app.get('/about', logger, (req, res) => {
//     res.send('About')
// })

// app.get('/api/product', logger, (req, res) => {
//     res.send('Products')
// })

// app.get('/api.items', logger, (req, res) => {
//     res.send('Items')
// })


// // Efficient way - use app.use() -> order matters 
// app.use('/api', logger) - this will apply to all the routh eith /api/... path 
app.use([logger, authorize])
app.get('/',(req, res) => {
    res.send('Home')
})

app.get('/about',(req, res) => {
    res.send('About')
})

app.get('/api/product',(req, res) => {
    res.send('Products')
})

app.get('/api.items',(req, res) => {
    res.send('Items')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
});