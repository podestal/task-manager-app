import ProjectForm from "./ProjectForm"
import Projects from "./Projects"
import { useDispatch } from "react-redux"
import { populateProjects } from "../../features/project/projectSlicer"
import React from "react"
import Axios from "axios"

const ProjectApp = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        Axios.get("http://3.94.81.244:8000/api/projects/")
        .then(response =>  dispatch(populateProjects(response.data)))
    }, [])

    return (
        <div>
            <h2>Projects</h2>
            <ProjectForm />
            <Projects />
        </div>
    )
}

export default ProjectApp