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
                const note ={
                    id: nanoid(),
                    title: action.payload.title,
                    content: action.payload.content
                }
                state.notes.push(note)
            },
            deleteNote: (state, action) => {
                state.notes = state.notes.filter(note => note.id != action.payload)
            },
            editNote: (state, action) => {
                const editedNote = {
                    id: action.payload.id,
                    title: action.payload.title,
                    content: action.payload.content
                }
                state.notes = state.notes.map(note => note.id == action.payload.id ? editedNote : note)
            }
        }
    }
)

export const {addNote, deleteNote, editNote} = noteSlice.actions

export default noteSlice.reducer