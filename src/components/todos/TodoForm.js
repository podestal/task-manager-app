

const TodoForm = (props) => {

    const handleSubmit = e => {
        e.preventDefault()
        props.handleAddTodo({
            title: e.target.elements.todo.value.trim(),
            completed: false,
            createdAt: Date.now()
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="title"
                    name="todo"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm