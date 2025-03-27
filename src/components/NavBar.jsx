import { useContext } from "react"
import { Link } from "react-router-dom"
import { EcommerceContext } from "./context/EcommerceContext"

const NavBar = () => {
    const {cantidadProductosCarrito} = useContext(EcommerceContext);

    return (
        <ul className="nav">
            <li className="nav-item">
                <Link to={"/"} className="nav-link text-dark text-uppercase fw-light">Catálogo</Link>
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
            <li className="nav-item">
                <Link to={"/alta"} className="nav-link text-dark text-uppercase fw-light">Alta</Link>
            </li>
            <li className="nav-item">
                <Link to={"/carrito"} className="nav-link text-dark text-uppercase fw-light">Carrito ({cantidadProductosCarrito()})</Link>
            </li>
        </ul>
    )
}

export default NavBar