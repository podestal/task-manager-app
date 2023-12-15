import { useSearchParams } from "react-router-dom"

const Project = (props) => {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get("id"))
    return (
        <div>
            {/* <p key={props.project.title}>{props.project.title} - {props.project.description}</p> */}
        </div>
    )
}

export default Project