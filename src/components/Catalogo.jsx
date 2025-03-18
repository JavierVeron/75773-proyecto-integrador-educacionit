import { useParams } from "react-router-dom";
import productos from "../assets/productos.json"
import Card from "./Card";

const Catalogo = () => {
    const {id} = useParams();
    const productosFiltro = id ? productos.filter(item => item.categoria == id) : productos;

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