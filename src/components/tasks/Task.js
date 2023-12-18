import React from "react"
import { useDispatch } from "react-redux"
import { changeStatus } from "../../features/task/taskSlicer"


const Task = (props) => {

    const [status, setStatus] = React.useState(props.task.status)
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(changeStatus({
            id: props.task.id,
            status
        }))
    }

    const handleChange = e => {
        setStatus(e.target.value)
    }

    return (
        <div>
            <p>{props.task.title} - {status}</p>
            <form onSubmit={handleSubmit}>
                <select onChange={e => handleChange(e)} value={status}>
                    <option value="n">Not Started</option>
                    <option value="p">In Progress</option>
                    <option value="r">In Revision</option>
                    <option value="c">Completed</option>
                </select>
                <button type="submit">Update Status</button>
            </form>
        </div>
    )
}

export default Task