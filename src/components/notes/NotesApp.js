import React from "react"
import NotesForm from "./NotesForm"

const NotesApp = () => {

    const [notes, setNotes] = React.useState([])
    console.log(notes)

    const handleAddNote = note => {
        setNotes([...notes, note])
    }

    return (
        <div>
            <h1>Notes</h1>
            <NotesForm 
                handleAddNote={handleAddNote}
            />
        </div>
    )
}

export default NotesApp