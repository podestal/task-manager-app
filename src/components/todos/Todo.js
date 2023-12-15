const Todo = (props) => {

    return (
        <div>
            <input
                type="checkbox"
                onChange={e => props.handleCompleted(props.todo.id)}
            />
            <span>{props.todo.title}</span>
            <button
                onClick={e => props.handleDelete(props.todo.id)}
            >Delete</button>
        </div>
    )
}

export default Todo