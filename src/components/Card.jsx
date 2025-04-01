import { useDispatch } from "react-redux"
import { ADD_PRODUCT_TO_CART_ACTION } from "./redux/cartActions";

const Card = ({producto}) => {
    const dispatch = useDispatch();
    const agregarProductoAlCarrito = (id) => {        
        dispatch(ADD_PRODUCT_TO_CART_ACTION(id));
    }

    return (
        <div className="card mb-4 border-0">
            <img src={producto.foto} className="img-fluid" alt={producto.nombre} />
            <div className="card-body text-center fw-light">
                <p className="card-text">{producto.nombre}</p>
                <p className="card-text text-danger">${producto.precio}</p>
                <p className="card-text">Stock: <b>{producto.stock}</b></p>
                {/* <p className={`${producto.envio ? "card-text text-danger fw-light" : ""}`}>{producto.envio ? "ENVÍO GRATIS" : ""}</p> */}
                <p><button className="btn btn-dark btn-sm" onClick={() => {agregarProductoAlCarrito(producto.id)}} >Agregar al Carrito</button></p>
            </div>
        </div>
    )
}

export default Card