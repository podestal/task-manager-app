import TaskApp from "../components/tasks/TaskApp"
import React from "react"

const ProjectPage = () => {

    const id = window.location.href.split("/").pop()

    return (
        <div>
            <TaskApp 
                id={id}
            />
        </div>
    )
}

export default ProjectPage