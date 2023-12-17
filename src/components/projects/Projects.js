import React from "react"
import { useSelector } from "react-redux"
import Project from "./Project"

const Projects = () => {

    const projects = useSelector(state => state.projectsData.projects)

    return (
        <div>
            {projects.map(project => (
                <Project 
                    key={project.id}
                    project={project}
                />
            ))}
        </div>
    )
}

export default Projects