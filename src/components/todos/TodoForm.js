import React from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../features/todo/todoSlicer"


const TodoForm = (props) => {

    const [title, setTitle] = React.useState("")
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addTodo(title))
        setTitle("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="title"
                    name="todo"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm