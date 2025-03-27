import { useContext } from "react";
import { EcommerceContext } from "./context/EcommerceContext";

const Card = ({producto}) => {
    const {agregarProductoAlCarrito} = useContext(EcommerceContext);

    return (
        <div className="card mb-4 border-0">
            <img src={producto.foto} className="img-fluid" alt={producto.nombre} />
            <div className="card-body text-center fw-light">
                <p className="card-text">{producto.nombre}</p>
                <p className="card-text text-danger">${producto.precio}</p>
                <p className="card-text">Stock: <b>{producto.stock}</b></p>
                {/* <p className={`${producto.envio ? "card-text text-danger fw-light" : ""}`}>{producto.envio ? "ENVÍO GRATIS" : ""}</p> */}
                <p><button className="btn btn-dark btn-sm" onClick={() => {agregarProductoAlCarrito(producto.id)}}>Agregar al Carrito</button></p>
            </div>
        </div>
    )
}

export default Card