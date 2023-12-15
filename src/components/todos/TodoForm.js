import { idGenerator } from "../utils/utils"

const TodoForm = (props) => {

    const handleSubmit = e => {
        e.preventDefault()
        props.handleAddTodo({
            id : idGenerator(),
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