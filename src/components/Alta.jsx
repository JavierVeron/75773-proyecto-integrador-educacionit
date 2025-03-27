import { useContext, useEffect, useState } from "react"
import productosJson from "../assets/productos.json"
import { EcommerceContext } from "./context/EcommerceContext";

const Alta = () => {
    const {obtenerProductos, agregarProductoContext, editarProductoContext, eliminarProductoContext} = useContext(EcommerceContext);
    const [productos, setProductos] = useState(obtenerProductos());
    const [nombre, setNombre] = useState("Remera GB Evolution Negra");
    const [precio, setPrecio] = useState(29990);
    const [stock, setStock] = useState(20);
    const [marca, setMarca] = useState("VCP");
    const [categoria, setCategoria] = useState("remeras-estampadas");
    const [detalles, setDetalles] = useState("mera con estampa, cuello redondo, con proceso de desgaste snow. Corte semi-over.");
    const [foto, setFoto] = useState("https://vcp.com.ar/cdn/shop/files/EvolutionNegra5.jpg?v=1741373316&width=700");
    const [envio, setEnvio] = useState(true);
    const [formCompleto, setFormCompleto] = useState(false);
    const [hayProductos, setHayProductos] = useState(productos.length > 0 ? true : false);
    const [edicion, setEdicion] = useState(false);
    const [idSeleccionado, setIdSeleccionado] = useState(0);

    const vaciarFormulario = () => {
        setNombre("");
        setPrecio("");
        setStock("");
        setMarca("");
        setCategoria("");
        setDetalles("");
        setFoto("");
        setEnvio("");
    }

    const guardarProducto = () => {
        const producto = {nombre:nombre, precio:precio, stock:stock, marca:marca, categoria:categoria, detalles:detalles, foto:foto, envio:(envio == 1 ? true : false)};
        agregarProductoContext(producto);
        vaciarFormulario();
    }

    const edicionProducto = (id) => {
        setEdicion(true);
        setIdSeleccionado(id);
        seleccionarProducto(id);
        const producto = productos.find(item => item.id == id);
        setNombre(producto.nombre);
        setPrecio(producto.precio);
        setStock(producto.stock);
        setMarca(producto.marca);
        setCategoria(producto.categoria);
        setDetalles(producto.detalles);
        setFoto(producto.foto);
        setEnvio(producto.envio);
    }

    const editarProducto = () => {
        const producto = {nombre:nombre, precio:precio, stock:stock, marca:marca, categoria:categoria, detalles:detalles, foto:foto, envio:(envio == 1 ? true : false)};
        editarProductoContext(idSeleccionado, producto);
        desseleccionarProducto(idSeleccionado);
        setEdicion(false);
        vaciarFormulario();
    }

    const cancelarEdicion = () => {
        desseleccionarProducto(idSeleccionado);
        setEdicion(false);
        vaciarFormulario();
    }

    const eliminarProducto = (id) => {
        const response = confirm("Desea eliminar el Producto: #" + id);

        if (response) {
            eliminarProductoContext(id);
        }
    }

    const seleccionarProducto = (id) => {
        const fila = document.getElementById("fila" + id);
        const tabla = fila.parentNode;
        
        for (const fila of tabla.childNodes) {
            fila.className = "";
        }
        
        fila.className = "table-active";
    }

    const desseleccionarProducto = (id) => {
        const fila = document.getElementById("fila" + id);
        fila.className = "";
    }

    const validarProductos = () => {
        setHayProductos(productos.length > 0 ? true : false);
    }

    const validarForm = () => {
        setFormCompleto((nombre && precio && stock && marca && categoria && detalles && foto != "") ? true : false);
    }

    const seleccionarEnvio = () => {
        setEnvio(envio ? false : true);
    }

    useEffect(() => {
        validarProductos();
        validarForm();
        setProductos(obtenerProductos());
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={nombre} onInput={(e)=>{setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Precio</label>
                            <input type="text" className="form-control" value={precio} onInput={(e)=>{setPrecio(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Stock</label>
                            <input type="text" className="form-control" value={stock} onInput={(e)=>{setStock(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Marca</label>
                            <input type="text" className="form-control" value={marca} onInput={(e)=>{setMarca(e.target.value)}} />
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Categoría</label>
                            <select className="form-control" value={categoria} onChange={(e)=>{setCategoria(e.target.value)}}>
                                <option value="remeras-lisas">Remeras Lisas</option>
                                <option value="remeras-estampadas">Remeras Estampadas</option>
                                <option value="jeans">Jeans</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Detalles</label>
                            <input type="text" className="form-control" value={detalles} onInput={(e)=>{setDetalles(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Foto</label>
                            <input type="text" className="form-control" value={foto} onInput={(e)=>{setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" value={envio} checked={envio ? "checked" : ""} onChange={seleccionarEnvio} />
                            <label className="form-check-label">Envío Gratis</label>
                        </div>
                        {edicion ? <><button type="button" className="btn btn-dark me-1" onClick={editarProducto}>Editar</button><button type="button" className="btn btn-dark" onClick={cancelarEdicion}>Cancelar</button></> : <button type="button" className="btn btn-dark" onClick={guardarProducto}>Guardar</button>}
                    </form>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                {hayProductos ? <table className="table">
                        <tbody>
                            {
                                productos.map(item => (
                                    <tr id={"fila" + item.id} key={item.id}>
                                        <td><img src={item.foto} alt={item.nombre} width={60} /></td>
                                        <td className="align-middle fw-light">{item.nombre}</td>
                                        <td className="align-middle fw-light">${item.precio}</td>
                                        <td className="align-middle fw-light">{item.stock}</td>
                                        <td className="align-middle fw-light">{item.marca}</td>
                                        <td className="align-middle fw-light">{item.categoria}</td>
                                        <td className="align-middle fw-light">{item.detalles}</td>
                                        <td className="align-middle fw-light"><b>{item.envio ? "Sí" : "No"}</b></td>
                                        <td className="align-middle text-end"><button className="btn btn-dark btn-sm" onClick={()=>{edicionProducto(item.id)}}><i className="bi bi-pencil-square"></i></button><button className="btn btn-dark btn-sm" disabled={edicion ? "disabled" : ""} onClick={() => {eliminarProducto(item.id)}}><i className="bi bi-trash"></i></button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table> : <h2 className="text-center fw-light my-5">No hay Productos!</h2>}
                </div>
            </div>
        </div>
    )
}

export default Alta