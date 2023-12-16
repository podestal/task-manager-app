import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    notes: [
        {
            id: 1234,
            title: "note 1",
            content: "content of note 1",
        }
    ]
}

export const noteSlice = createSlice(
    {
        name: "note",
        initialState,
        reducers: {
            addNote: (state, action) => {
                const note ={
                    id: nanoid,
                    title: action.payload.title,
                    content: action.payload.content
                }
            }
        }
    }
)

export const {addNote} = noteSlice.actions

export default noteSlice.reducer