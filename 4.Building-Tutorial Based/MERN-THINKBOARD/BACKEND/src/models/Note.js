import mongoose from "mongoose";

// 1. Create a schema
// 2. Create a model based on that schema

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        }
    }, 
    {timestamps: true}  // Created and updated at 
);

const Note = mongoose.model("Note", noteSchema)
export default Note
