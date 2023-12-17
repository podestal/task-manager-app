import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { editNote } from "../features/note/noteSlicer"

const EditNotePage = () => {

    const id = window.location.href.split("/").pop()
    const notes = useSelector(state => state.notesData.notes)
    const note = notes.find(note => note.id === id)
    const dispatch = useDispatch()
    const [title, setTitle] = React.useState(note ? note.title : "")
    const [content, setContent] = React.useState(note ? note.content : "")

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(editNote({ 
            id,
            title,
            content
        }))
    }

    return (
        <div>
            Edit ...
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea 
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditNotePage