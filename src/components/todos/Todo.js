import React from "react"
import { useDispatch } from 'react-redux'
import { removeTodo, completeTodo } from "../../features/todo/todoSlicer"

const Todo = (props) => {

    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeTodo(props.todo.id))
    }

    const handleCompleted = () => {
        dispatch(completeTodo({
            ...props.todo,
            completed: !props.todo.completed
        }))
    }

    return (
        <div>
            <input
                type="checkbox"
                onChange={handleCompleted}
            />
            <span>{props.todo.title}</span>
            <button
                onClick={handleRemove}
            >Delete</button>
        </div>
    )
}

export default Todo