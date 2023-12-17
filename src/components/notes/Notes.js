import Note from "./Note"
import React from "react"
import { useSelector } from "react-redux"

const Notes = () => {

    const notes = useSelector(state => state.notesData.notes)

    return (
        <div>
            {notes.map(note => 
                <Note 
                    key={note.id}
                    note={note}
                />)}
        </div>
    )
}

export default Notes