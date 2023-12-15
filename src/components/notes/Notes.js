import Note from "./Note"

const Notes = (props) => {
    return (
        <div>
            {props.notes.map(note => 
                <Note 
                    key={note.id}
                    note={note}
                    handleDelete={props.handleDelete}
                />)}
        </div>
    )
}

export default Notes