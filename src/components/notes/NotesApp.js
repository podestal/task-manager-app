import React from "react"
import NotesForm from "./NotesForm"
import Notes from "./Notes"

const NotesApp = () => {

    const [notes, setNotes] = React.useState([])
    console.log(notes)

    const handleAddNote = note => {
        setNotes([...notes, note])
    }

    const handleDelete = id => {
        setNotes(notes.filter(note => note.id != id))
    }

    return (
        <div>
            <h1>Notes</h1>
            <NotesForm 
                handleAddNote={handleAddNote}
            />
            <Notes 
                notes={notes}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default NotesApp