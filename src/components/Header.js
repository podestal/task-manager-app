import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h1>Productivity App</h1>
            <Link to="/">Home</Link>
            <Link to="/notes">Notes</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/todos">Todos</Link>
        </header>
    )
}

export default Header