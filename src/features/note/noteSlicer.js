import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    notes: []
}

export const noteSlice = createSlice(
    {
        name: "note",
        initialState,
        reducers: {
            addNote: (state, action) => {
                console.log("payload", action.payload);
                const note ={
                    id: nanoid(),
                    title: action.payload.title,
                    content: action.payload.content
                }
                state.notes.push(note)
            }
        }
    }
)

export const {addNote} = noteSlice.actions

export default noteSlice.reducer