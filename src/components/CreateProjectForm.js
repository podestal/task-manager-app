import React from "react"

const CreateProjectForm = () => {

    const [projects, setProjects] = React.useState([])
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")

    const handleSubmit = e => {
        e.preventDefault()
        setProjects([{title, description}, ...projects])
        setTitle("")
        setDescription("")
    }

    return (
        <div>
            {console.log("Projects", projects)}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={ e => setTitle(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={ e => setDescription(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateProjectForm