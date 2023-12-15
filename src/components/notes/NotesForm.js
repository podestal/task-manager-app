import React from "react"

const NotesForm = (props) => {

    const [title, setTitle] = React.useState("")
    const [content, setContent] = React.useState("")

    const handleSubmit = e => {
        e.preventDefault()
        props.handleAddNote({
            title,
            content
        })
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