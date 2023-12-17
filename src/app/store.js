import { configureStore } from "@reduxjs/toolkit"
import noteSlicer from "../features/note/noteSlicer"
import todoSlicer from "../features/todo/todoSlicer"

export const notesStore = configureStore(
    {
        reducer: {
            notesData: noteSlicer,
            todosData: todoSlicer
        }
    }
)