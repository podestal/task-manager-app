import { Link } from "react-router-dom"

const Project = (props) => {

    return (
        <div>
            <Link to={`/projects/${props.project.id}`}>
                <p>{props.project.title}</p>
            </Link>
        </div>
    )
}

export default Project