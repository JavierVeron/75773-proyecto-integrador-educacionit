const Card = ({producto}) => {
    const agregarAlCarrito = (id) => {
        console.log("Agregaste el Producto: #" + id);
    }

    return (
        <div className="card mb-4 border-0">
            <img src={producto.foto} className="img-fluid" alt={producto.nombre} />
            <div className="card-body text-center fw-light">
                <p className="card-text">{producto.nombre}</p>
                <p className="card-text text-danger">${producto.precio}</p>
                <p className="card-text">Stock: <b>{producto.stock}</b></p>
                <p className={`${producto.envio ? "card-text text-white bg-black fw-light p-1" : ""}`}>{producto.envio ? "ENVÍO GRATIS" : ""}</p>
                <p><button className="btn btn-dark" onClick={() => {agregarAlCarrito(producto.id)}}>Agregar al Carrito</button></p>
            </div>
        </div>
    )
}

export default Card