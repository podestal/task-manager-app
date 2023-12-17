import Todo from "./Todo"
import React from "react"
import { useSelector } from "react-redux"

const Todos = (props) => {

    const todos = useSelector(state => state.todosData.todos)

    return (
        <div>
            {todos.map(todo => 
                <Todo 
                    key={todo.id}
                    todo={todo}
                    handleCompleted={props.handleCompleted}
                    handleDelete = {props.handleDelete}
                />
            )}
        </div>
    )
}

export default Todos