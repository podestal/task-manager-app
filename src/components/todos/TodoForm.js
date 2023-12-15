const TodoForm = (props) => {

    const handleSubmit = e => {
        e.preventDefault()
        props.handleAddTodo({
            id : Math.floor(Math.random() * 10000000000),
            title: e.target.elements.todo.value.trim(),
            completed: false,
            createdAt: Date.now()
        })
        e.target.elements.todo.value = ""
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