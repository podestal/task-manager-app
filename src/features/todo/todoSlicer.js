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
            }
        }
    }
)

export const { addTodo } = todosSlicer.actions

export default todosSlicer.reducer