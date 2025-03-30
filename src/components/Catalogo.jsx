import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { EcommerceContext } from "./context/EcommerceContext";
import Card from "./Card";
import Loading from "./Loading";

const Catalogo = () => {
    const {loading, productos} = useContext(EcommerceContext);
    const [productosFiltro, setProductosFiltro] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        setProductosFiltro(id ? productos.filter(item => item.categoria == id) : productos);
    }, [productos, id])

    if (loading) {
        return (
            <Loading />
        )
    }

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