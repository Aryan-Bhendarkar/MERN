const express = require('express');
const path = require('path');
const app = express()

// setup static and middleware 
app.use(express.static('./public'))

// now we have added index.HTML in public so that we can remove code below this
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, (req, res) => {
    console.log('server is listening port 5000 ....')
})