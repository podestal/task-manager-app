import { configureStore } from "@reduxjs/toolkit"
import noteSlicer from "../features/note/noteSlicer"

export const notesStore = configureStore(
    {
        reducer: noteSlicer,
    }
)