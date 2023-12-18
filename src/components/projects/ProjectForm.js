import React from "react"
import { useDispatch } from "react-redux"
import { addProject } from "../../features/project/projectSlicer"
import Axios from "axios"

const ProjectForm = () => {

    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [slug, setSlug] = React.useState("")
    const dispatch = useDispatch()

    const yourConfig = {
        headers: {
           token: "JWT " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyOTM4OTQyLCJpYXQiOjE3MDI4NTI1NDIsImp0aSI6ImNiMjdjMmQwM2IzMjRlNTU4OTc5YmUzOTNmOWZkNGM3IiwidXNlcl9pZCI6MX0.NoCK6Qk3qm-EbrY9HSDfsNiuGGfdvl2owkjArEffcSk"
        }
     }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addProject({
            title,
            description
        }))
        Axios.post(`http://3.94.81.244:8000/api/projects/`, 
        {
            title,
            slug,
            description,
        }, yourConfig)
        .then(response => console.log(response))
        .catch(error => console.log(error))
        setTitle("")
        setSlug("")
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
                    placeholder="slug"
                    value={slug}
                    onChange={e => setSlug(e.target.value)}
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