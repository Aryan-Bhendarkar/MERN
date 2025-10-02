const http = require('http');
const {readFileSync} = require('fs')

// get all files 
const homePage = readFileSync('./navbar-app/index.html')

const server = http.createServer((req, res) => {
    // console.log(req.method) Get method 
    // console.log(req.url) - Get URL user trying to access /contact

    const url = req.url;
    // Home page 
    if(url === '/'){
        // res.writeHead(200, {"content-type": 'text/html'}) 
        // res.write('<h1>Home Page</h1>')
        res.writeHead(200, {"content-type": 'text/html'})
        res.write(homePage)
        res.end()  
    }
    // About Page 
    else if(url === '/about'){
        res.writeHead(200, {"content-type": 'text/html'}) 
        res.write('<h1>About Page</h1>')
        res.end()
    }

    else{
        res.writeHead(404, {"content-type": 'text/html'}) 
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
    // console.log('user hit the server');
    // res.writeHead(200, {"content-type": 'text/html'})  // Header data of response
    // res.writeHead(200, {"content-type": 'text/plain'}) // Header will consider as plain text, not HTML tags 
    // res.write('<h1>Home Page</h1>')                     // Actual data that we will give as response
    // // res.end('Home Page');                           // It will also work as above            
    // res.end()                                          // Here, Server will know that everything has been sent, it will not wait further
})

server.listen(5000);