// const express = require('express') - for using this, we have to add type: commonJS in package.json
//- for using this, we have to add type: module in package.json
import express from "express"  
import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from './config/db.js'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

connectDB()

// Middleware
app.use(express.json())
app.use("/api/notes", notesRoutes)

app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT)
})



// EndPoint - It is acombination of URL + HTTP methid that lets the client interact with specific resouce


