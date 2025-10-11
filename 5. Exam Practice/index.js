// const express = require('express')
// const app = express()  // Create web-server name app

// app.get('/', (req, res) => {
//     res.send("Hello, This is our HomePage API!🥳")
// })

// app.listen(5000, () => {
//     console.log("Server started on PORT 5000")
// })

// // Define all 4 major routes
// app.get('/users', (req, res) => {
//     res.json([{'id':1, name:'Aryan'}, {'id':2, name:'Mitali'}])
// })

// app.post('/users', (req, res) => {
//     res.status(201).json({ message: 'User created!' })
// })

// app.put('/users/:id', (req, res) => {
//     res.json({message: `${req.params.id} is updated`})
// })

// app.delete('/users/:id', (req, res) => {
//     res.json({message: `${req.params.id} is deleted`})
// })


// // Setup to Read JSON Body Data

// app.use(express.json());
// app.post('/product/:category', (req, res) => {
//    // Example: POST /product/electronics?onsale=true
//   // Body: { "name": "Headphones", "price": 99 }

//   const { category } = req.params;    // electronics
//   const { onsale } = req.query;       // true
//   const { name, price } = req.body;   // Headphones, 99
//   const headers = req.headers;        // all request headers

  
//   res.json({
//     category,
//     onsale,
//     product: { name, price },
//     headers
//   });

// })

// // Exercise 
// app.get('/users/:userId', (req,res) => {
//     res.json({userId: req.params.userId})
// })

// app.post('/books', (req, res) => {
//     res.status(201).json({message: "Book created", data: req.body})
// })

// app.get('/search', (req, res) => {
//     res.json({search: req.query.q})
// })

// app.get('/users/:userId', (req, res) => {
//     let userID = req.params.userId
//     if(userID !== '123'){
//         res.status(404).json({error: "User not found"})
//     }
//     res.status(200).json({userId: req.params.userId})
// })

// app.post('/register', (req, res) => {
//     const {username} = req.body
//     if (!username || username.trim() === ""){
//         return res.status(400).json({error: "Missing username"})
//     }
//     res.status(201).json({ message: "Registered", username });
// })

// app.delete('/products/:id', (req, res) => {
//     res.status(204).end()
// })

// // Middleware 
// // express.json() parses JSON body data
// // express.urlencoded() parses form data

// app.use((req, res, next) => {
//     console.log(`${req.method} from ${req.url}`)
//     next()
// })


// const express = require('express');
// const app = express();

// app.use(express.json());

// // Q1: Request logger middleware (all routes)
// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// };
// app.use(logger);

// // Q2: Auth middleware (only for /secure routes)
// const requireAuthHeader = (req, res, next) => {
//     if (!req.headers['x-auth']) {
//         return res.status(401).json({ error: 'Unauthorized: x-auth header missing' });
//     }
//     next();
// };
// app.use('/secure', requireAuthHeader);

// // Sample /secure endpoint
// app.get('/secure/data', (req, res) => {
//     res.json({ message: 'Secure data, header present.' });
// });

// // Open endpoint
// app.get('/open', (req, res) => {
//     res.json({ message: 'Open route, no auth needed.' });
// });

// // Q3: Error-handling middleware (at end, after all routes)
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ error: 'Something broke!' });
// });

// // Route to trigger error and test error middleware
// app.get('/error', (req, res) => {
//     throw new Error('Intentional error!');
// });

// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });


// MongoDB-connection 

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mern_exam', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("Error", err))