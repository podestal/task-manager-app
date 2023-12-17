import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todosSlicer = createSlice()

export default todosSlicer.reducer