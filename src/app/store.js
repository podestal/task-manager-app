import { configureStore } from "@reduxjs/toolkit"
import noteSlicer from "../features/note/noteSlicer"
import todoSlicer from "../features/todo/todoSlicer"
import projectSlicer from "../features/project/projectSlicer"
import taskSlicer from "../features/task/taskSlicer"

export const notesStore = configureStore(
    {
        reducer: {
            notesData: noteSlicer,
            todosData: todoSlicer,
            projectsData: projectSlicer,
            tasksData: taskSlicer
        }
    }
)