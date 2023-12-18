import React from "react"
import { useSelector } from "react-redux"
import Project from "./Project"
import Axios from "axios"

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