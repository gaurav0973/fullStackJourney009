import mongoose, { Schema } from "mongoose"



const NoteSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength : 100
    },
    content: {
        type: String,
        required: true,
        maxLength : 3000
    }
}, { timestamps: true })


const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema)
export default Note