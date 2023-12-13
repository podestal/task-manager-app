import React from "react"
import CreateProjectForm from "./CreateProjectForm"
import Project from "./Project"

const Projects = () => {

    const [projects, setProjects] = React.useState([])

    const handleAddProject = (project) => {
        setProjects([project, ...projects])
    }

    console.log(projects)

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
            <h1>Projects</h1>
            <CreateProjectForm 
                handleAddProject = {handleAddProject}
            />
            {projects.map(project => <Project project={project}/>)}
        </div>
    )
}

export default Projects