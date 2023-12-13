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

    React.useEffect(() => {
        const projects = localStorage.getItem("projects")
        setProjects(JSON.parse(projects))
    }, [])

    React.useEffect(() => {
        if (projects.length > 0) {
            const json = JSON.stringify(projects)
            localStorage.setItem("projects", json)
        }
    }, [projects])


    return (
        <div>
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