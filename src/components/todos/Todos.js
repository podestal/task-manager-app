import Todo from "./Todo"
import React from "react"
import { useSelector } from "react-redux"

const Todos = () => {

    const todos = useSelector(state => state.todosData.todos)

    return (
        <div>
            {todos.map(todo => 
                <Todo 
                    key={todo.id}
                    todo={todo}
                />
            )}
        </div>
    )
}

export default Todos