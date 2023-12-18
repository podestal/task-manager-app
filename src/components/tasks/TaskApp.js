import TaskForm from "./TaskForm"
import Tasks from "./Tasks"
import React from "react"

const TaskApp = (props) => {

    const [tasks, setTasks] = React.useState([])

    React.useEffect(() => {
        fetch(`http://3.94.81.244:8000/api/projects/${props.id}/tasks/`)
        .then(response => response.json())
        .then(data => setTasks(data))
    }, [])

    return (
        <div>
            <h3>Task App</h3>
            <TaskForm />
            <Tasks 
                tasks={tasks}
            />
        </div>
    )
}

export default TaskApp