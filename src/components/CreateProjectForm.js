import React from "react"

const CreateProjectForm = (props) => {

    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")

    const handleSubmit = e => {
        e.preventDefault()
        props.handleAddProject({title, description})
        setTitle("")
        setDescription("")
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={ e => setTitle(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={ e => setDescription(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateProjectForm