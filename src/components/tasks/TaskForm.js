import React from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../../features/task/taskSlicer"

const TaskForm = () => {

    const [title, setTitle] = React.useState("")
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addTask({
            title
        }))
        setTitle("")
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
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default TaskForm