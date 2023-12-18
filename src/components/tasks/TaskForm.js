import React from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../../features/task/taskSlicer"
import Axios from "axios"

const TaskForm = (props) => {

    const [title, setTitle] = React.useState("")
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        Axios.post(props.url, {
            title,
            status: "n"
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
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