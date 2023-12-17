import { useSelector } from "react-redux"
import Task from "./Task"

const Tasks = () => {

    const tasks = useSelector(state => state.tasksData.tasks)
    console.log(tasks)

    return (
        <div>
            {tasks.map(task => (
                <Task 
                    key={task.id}
                    task={task}
                />
            ))}
        </div>
    )
}

export default Tasks