import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link to={"/"} className="nav-link text-dark text-uppercase fw-light">Productos</Link>
            </li>
            <li className="nav-item">
                <Link to={"/categoria/remeras-lisas"} className="nav-link text-dark text-uppercase fw-light">Remeras Lisas</Link>
            </li>
            <li className="nav-item">
                <Link to={"/categoria/remeras-estampadas"} className="nav-link text-dark text-uppercase fw-light">Remeras Estampadas</Link>
            </li>
            <li className="nav-item">
                <Link to={"/categoria/jeans"} className="nav-link text-dark text-uppercase fw-light">Jeans</Link>
            </li>
        </ul>
    )
}

export default NavBar