const Note = (props) => {
    return (
        <div>
            <h3>{props.note.title}</h3>
            <p>{props.note.content}</p>
            <button onClick={e => props.handleDelete(props.note.id)}>Delete</button>
        </div>
    )
}

export default Note