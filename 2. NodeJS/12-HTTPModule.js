// Importing HTTP Module 
const http = require('http');

// create a server
const server = http.createServer((req, res) => {
    
    // console.log(req)      // log all the details of request made by user 
    // res.write("Welcome to our Homepage!!!")
    // res.end()

    if(req.url == '/home'){
        res.end("Welcome to Home Page !!!");
    }
    if(req.url == '/about'){
        res.end("Welcome to About page !!!");
    } 
    res.end(`
        <h1> Oops, Page not Found !!! </h1>
        <p>We can'r seem to find the page your looking for</p>
        <a href='/'>Back to home</a>
    `)
});

server.listen(5000)
