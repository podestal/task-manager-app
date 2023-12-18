import TaskForm from "./TaskForm"
import Tasks from "./Tasks"
import React from "react"
import Axios from "axios"

const TaskApp = (props) => {

    const [tasks, setTasks] = React.useState([])
    const URL = `http://3.94.81.244:8000/api/projects/${props.id}/tasks/`

    React.useEffect(() => {
        Axios.get(URL)
        .then(response => setTasks(response.data))
    }, [])

    return (
        <div>
            <h3>Task App</h3>
            <TaskForm 
                url={URL}
            />
            <Tasks 
                tasks={tasks}
            />
        </div>
    )
}

export default TaskApp