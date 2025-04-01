import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import Card from "./Card";

const Catalogo = () => {
    const productos = useSelector(state => state.products);
    const [productosFiltro, setProductosFiltro] = useState([]);
    const {id} = useParams();

    productos.then(resultado => {
        setProductosFiltro(id ? resultado.filter(item => item.categoria == id) : resultado);        
    })

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