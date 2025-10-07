import Note from "../models/Note.js"

export async function getAllNotes(req, res){
    try{
        const notes = await Note.find()
        res.status(200).json(notes)
    }
    catch(err){
        console.error("Error in getAllNotes controller", err)
        res.status(500).json({message: 'Intenal server error'})
    }
}



export async function createNote(req, res){
   try {
    const {title, content} = req.body
    const note = new Note({title, content})

    const savedNote = await note.save()
    res.status(201).json({message: savedNote})
   } 
   catch (error) {
    console.error("Error in createNote controller", error)
    res.status(500).json({message: "Intenal server error"})
   }
}

export function updateNote(req, res){
    res.status(200).json({message: "Note updated Successfully!!"})
}

export function deleteNote(req, res){
    res.status(200).json({message: "Note deleted Successfully!!"})
}