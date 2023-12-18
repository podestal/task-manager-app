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
            },
            changeStatus: (state, action) => {

                const id = action.payload.id
                const status = action.payload.status
                console.log(status);
                state.tasks = state.tasks.map(task => task.id == id ? {...task, status: status} : task)
            }
        }
    }
)

export const { addTask, changeStatus } = taskSlicer.actions

export default taskSlicer.reducer