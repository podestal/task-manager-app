import React from "react"
import { useDispatch } from "react-redux"
import { addNote } from "../../features/note/noteSlicer"

const NotesForm = (props) => {

    const [title, setTitle] = React.useState("")
    const [content, setContent] = React.useState("")
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addNote({
            title,
            content
        }))
        setTitle("")
        setContent("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea 
                    placeholder="content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button type="submit">Add Note</button>

            </form>
        </div>
    )
}

export default NotesForm