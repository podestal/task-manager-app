import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todosSlicer = createSlice(
    {
        name: "todo",
        initialState,
        reducers: {
            addTodo: (state, action) => {
                const todo = {
                    id: nanoid(),
                    title: action.payload,
                    created_at: Date.now(),
                    completed: false
                }
                state.todos.push(todo)
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter(todo => todo.id != action.payload)
            }
        }
    }
)

export const { addTodo, removeTodo } = todosSlicer.actions

export default todosSlicer.reducer