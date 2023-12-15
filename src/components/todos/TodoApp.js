import React from "react"
import TodoForm from "./TodoForm"

const TodoApp = () => {

    const [todos, setTodos] = React.useState([])
    console.log(todos)

    const handleAddTodo = todo => {
        setTodos([todo, ...todos])
    }

    return (
        <div>
            <h1>Todos</h1>
            <TodoForm 
                handleAddTodo={handleAddTodo}
            />
        </div>
    )
}

export default TodoApp