import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    tasks: []
}

export const taskSlicer = createSlice(
    {
        name: "task",
        initialState,
        reducers: {
            addTask: (state, action) => {
                const task = {
                    id: nanoid(),
                    title: action.payload.title,
                    createdAt: Date.now(),
                    status: "n"
                }
                state.tasks.push(task)
            }
        }
    }
)

export const { addTask } = taskSlicer.actions

export default taskSlicer.reducer