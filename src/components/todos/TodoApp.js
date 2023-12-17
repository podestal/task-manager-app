import React from "react"
import TodoForm from "./TodoForm"
import Todos from "./Todos"
import moment from "moment"

const TodoApp = () => {

    const date = moment().format("dddd MMMM Mo YYYY")

    return (
        <div>
            <h1>{date} Todo's</h1>
            <Todos />
            <TodoForm />
        </div>
    )
}

export default TodoApp