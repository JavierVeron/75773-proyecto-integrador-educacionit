import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { EcommerceContext } from "./context/EcommerceContext";
import Card from "./Card";

const Catalogo = () => {
    const {obtenerProductos} = useContext(EcommerceContext);
    const [productos, setProductos] = useState([]);
    const [productosFiltro, setProductosFiltro] = useState([]);
    const {id} = useParams();

    useEffect(() => {       
        setProductos(obtenerProductos());
    }, [])

    useEffect(() => {
        setProductosFiltro(id ? productos.filter(item => item.categoria == id) : productos);
    }, [id])

    return (
        <div className="container">
            <div className="row">
                {
                    productosFiltro.map(item => (
                        <div key={item.id} className="col-md-3">
                            <Card producto={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Catalogo