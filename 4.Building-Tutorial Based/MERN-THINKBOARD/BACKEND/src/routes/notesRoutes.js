import express from 'express'
import {createNote, deleteNote, getAllNotes, updateNote} from '../controllers/notesController.js'

const router = express.Router()
router.get("/", getAllNotes)

// router.get("/", (req, res) => {
//     res.status(200).send("You just fetched the notes")
// })

// router.post('/', (req, res) => {
    //     res.status(201).json({message: "Note created Successfully!!"})
    // })
    
router.get("/", getAllNotes)
router.post('/', createNote)
router.put('/:id', updateNote)
router.delete('/:id', deleteNote)

export default router