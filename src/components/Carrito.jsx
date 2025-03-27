import { useContext, useState, useEffect } from "react"
import { EcommerceContext } from "./context/EcommerceContext";

const CarritoDeCompras = () => {
    const {obtenerCarrito, eliminarProductoCarrito, cantidadProductosCarrito, sumaProductosCarrito, vaciarCarrito, incrementarItemProductoCarrito, decrementarItemProductoCarrito} = useContext(EcommerceContext);
    const [carrito, setCarrito] = useState(obtenerCarrito());

    useEffect(() => {
        setCarrito(obtenerCarrito());
    })

    if (cantidadProductosCarrito() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center fw-light">No hay Productos en el Carrito!</h1>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="text-end" colSpan={6}><button className="btn btn-dark btn-sm" onClick={vaciarCarrito}>Vaciar Carrito</button></td>
                            </tr>
                            {
                                carrito.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.foto} alt={item.nombre} width={60} /></td>
                                        <td className="align-middle fw-light">{item.nombre}</td>
                                        <td className="align-middle fw-light">${item.precio}</td>
                                        <td className="align-middle fw-light">
                                            <div className="btn-group" role="group">
                                                <button type="button" className="btn btn-outline-dark" onClick={() => {decrementarItemProductoCarrito(item.id)}}>-</button>
                                                <button type="button" className="btn btn-outline-dark">{item.cantidad}</button>
                                                <button type="button" className="btn btn-outline-dark" onClick={() => {incrementarItemProductoCarrito(item.id)}}>+</button>
                                            </div>
                                        </td>
                                        <td className="align-middle fw-light">${item.precio * item.cantidad}</td>
                                        <td className="align-middle text-end"><button className="btn btn-dark btn-sm" onClick={() => {eliminarProductoCarrito(item.id)}}>Eliminar</button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td className="align-middle text-center fw-light" colSpan={4}>Suma Total</td>
                                <td className="align-middle fw-light">${sumaProductosCarrito()}</td>
                                <td className="align-middle text-end"><button className="btn btn-dark btn-sm">Checkout</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CarritoDeCompras