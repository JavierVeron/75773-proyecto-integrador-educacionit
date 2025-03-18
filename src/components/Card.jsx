const Card = ({producto}) => {
    return (
        <div className="card mb-4 border-0">
            <img src={producto.foto} className="img-fluid" alt={producto.nombre} />
            <div className="card-body text-center fw-light">
                <p className="card-text">{producto.nombre}</p>
                <p className="card-text text-danger">${producto.precio}</p>
                <p className="card-text">Stock: <b>{producto.stock}</b></p>
                <p className={`${producto.envio ? "card-text text-white bg-black fw-light rounded-pill p-1" : ""}`}>{producto.envio ? "ENVÍO GRATIS" : ""}</p>
            </div>
        </div>
    )
}

export default Card