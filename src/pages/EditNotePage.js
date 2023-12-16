import React from "react"
import { NotesContext } from "../context/NotesContext"

const EditNotePage = () => {
    const id = window.location.href.split("/").pop()
    const name = React.useContext(NotesContext)
    console.log("name", name);
    return (
        <div>
            Edit note ...
        </div>
    )
}

export default EditNotePage