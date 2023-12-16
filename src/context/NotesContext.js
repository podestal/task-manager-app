import React from "react"

export const NotesContext = React.createContext()

const NotesContextProvider = ({children}) => {

    const [name, setName] = React.useState("Luis")

    return (
        <NotesContext.Provider value={name}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContextProvider