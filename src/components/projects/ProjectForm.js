import React from "react"
import { useDispatch } from "react-redux"
import { addProject } from "../../features/project/projectSlicer"

const ProjectForm = () => {

    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addProject({
            title,
            description
        }))
        setTitle("")
        setDescription("")

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button type="submit">Create Project</button>
            </form>
        </div>
    )
}

export default ProjectForm