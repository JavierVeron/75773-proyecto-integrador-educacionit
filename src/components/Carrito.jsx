import { useContext, useState } from "react"
import { EcommerceContext } from "./context/EcommerceContext";
import mockAPI from "./mockAPI";

const CarritoDeCompras = () => {
    const {carrito, eliminarProductoCarrito, cantidadProductosCarrito, sumaProductosCarrito, vaciarCarrito, incrementarItemProductoCarrito, decrementarItemProductoCarrito} = useContext(EcommerceContext);
    const [idPedido, setIdPedido] = useState(0);

    if (idPedido > 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center fw-light">Gracias por tu Compra! Tu Pedido es el <b>#{idPedido}</b></h1>
                    </div>
                </div>
            </div>
        )
    }

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

    const guardarPedido = async () => {
        const items = carrito.map(item => ({id:item.id, nombre:item.nombre, precio:item.precio, cantidad:item.cantidad}));
        const fechaActual = new Date();
        const fecha = `${fechaActual.getDate()}-${fechaActual.getMonth() + 1}-${fechaActual.getFullYear()} ${fechaActual.getHours()}:${fechaActual.getMinutes()}`; 
        const pedido = {items:items, total:sumaProductosCarrito(), fecha:fecha};
        const response = await mockAPI.post("/pedidos", pedido);
        setIdPedido(response.data.id);
        vaciarCarrito();
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
                                <td className="align-middle text-end"><button className="btn btn-dark btn-sm" onClick={guardarPedido}>Checkout</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CarritoDeCompras