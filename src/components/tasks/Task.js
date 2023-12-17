const Task = (props) => {
    return (
        <div>
            <p>{props.task.title} - {props.task.status}</p>
        </div>
    )
}

export default Task