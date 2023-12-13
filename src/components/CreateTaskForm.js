import React from "react"

const CreateTaskForm = () => {

    const [tasks, setTasks] = React.useState([])
    const [title, setTitle] = React.useState("")

    const handleSubmit = e => {
        e.preventDefault()
        setTasks([{title}, ...tasks])
        setTitle("")
    }

    React.useEffect(() => {
        console.log(tasks)
    }, [tasks])

    return (
        <div>
            <h1>Create Task Form</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateTaskForm