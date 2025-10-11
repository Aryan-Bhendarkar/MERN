// const express = require('express') - for using this, we have to add type: commonJS in package.json
//- for using this, we have to add type: module in package.json
import express from "express"  
import cors from 'cors'
import dotenv from 'dotenv'

import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from './config/db.js'
import rateLimiter from "./Middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

// Middleware
app.use(cors({
    origin:"http://localhost:5174"
}))
app.use(express.json())         //This middleware will parse the JSON body
app.use(rateLimiter)
app.use("/api/notes", notesRoutes)


// Firstly, we will connect Database and then will connect server 
connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT)
    })
})


// EndPoint - It is acombination of URL + HTTP methid that lets the client interact with specific resouce


