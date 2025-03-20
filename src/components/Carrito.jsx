import { useEffect, useState } from "react"
import productos from "../assets/productos.json"

const CarritoDeCompras = () => {
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        const producto1 = productos.find(item => item.id == 1);
        const producto2 = productos.find(item => item.id == 2);
        setCarrito([producto1, producto2]);
    }, [])

    if (carrito.length == 0) {
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
                        {
                            carrito.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.foto} alt={item.nombre} width={60} /></td>
                                    <td className="align-middle fw-light">{item.nombre}</td>
                                    <td className="align-middle fw-light">${item.precio}</td>
                                    <td className="align-middle fw-light">x2</td>
                                    <td className="align-middle fw-light">${item.precio * 2}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CarritoDeCompras