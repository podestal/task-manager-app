import React from "react"
import TodoForm from "./TodoForm"
import Todos from "./Todos"

const TodoApp = () => {

    const [todos, setTodos] = React.useState([])

    const handleAddTodo = todo => {
        setTodos([...todos, todo])
    }

    const handleCompleted = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed } : todo))
    }

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div>
            <h1>Todos</h1>
            <Todos 
                todos={todos}
                handleCompleted = {handleCompleted}
                handleDelete = {handleDelete}
            />
            <TodoForm 
                handleAddTodo={handleAddTodo}
            />
        </div>
    )
}

export default TodoApp