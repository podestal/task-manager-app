import { Link, Location } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deleteNote } from "../../features/note/noteSlicer"

const Note = (props) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteNote(props.note.id))
    }

    return (
        <div>
            <Link to={`/notes/${props.note.id}`}>
                <h3>{props.note.title}</h3>
            </Link>
            <p>{props.note.content}</p>
            <button onClick={e => handleDelete()}>Delete</button>
        </div>
    )
}

export default Note