import { Link, Location } from "react-router-dom"

const Note = (props) => {

    return (
        <div>
            <Link to={`/notes/${props.note.id}`}>
                <h3>{props.note.title}</h3>
            </Link>
            <p>{props.note.content}</p>
            <button onClick={e => props.handleDelete(props.note.id)}>Delete</button>
        </div>
    )
}

export default Note