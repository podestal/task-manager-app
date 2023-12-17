import React from "react"
import { useDispatch } from 'react-redux'
import { removeTodo } from "../../features/todo/todoSlicer"

const Todo = (props) => {

    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeTodo(props.todo.id))
    }

    return (
        <div>
            <input
                type="checkbox"
                onChange={e => props.handleCompleted(props.todo.id)}
            />
            <span>{props.todo.title}</span>
            <button
                onClick={handleRemove}
            >Delete</button>
        </div>
    )
}

export default Todo