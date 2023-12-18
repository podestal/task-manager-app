import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    projects: []
}

export const projectSlicer = createSlice(
    {
        name: "project",
        initialState,
        reducers: {
            addProject: (state, action) => {
                const project = {
                    id: nanoid(),
                    title: action.payload.title,
                    description: action.payload.description,
                    createdAt: Date.now(),
                    lastUpdated: Date.now(),
                    status: "P",
                    tasks: []
                }
                state.projects.push(project)
            },
            populateProjects: (state, action) => {
                state.projects = action.payload
            }
        }
    }
) 

export const { addProject, populateProjects } = projectSlicer.actions

export default projectSlicer.reducer