const Project = (props) => {
    return (
        <div>
            <p key={props.project.title}>{props.project.title} - {props.project.description}</p>
        </div>
    )
}

export default Project