import { createContext, useEffect, useState } from "react";
import mockAPI from "../mockAPI";

export const EcommerceContext = createContext();

const EcommerceContextProvider = ({children}) => {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await mockAPI.get("/productos");            
            setProductos(response.data);
            setLoading(false);
        })();
    }, [])

    const agregarProductoContext = (producto) => {
        const id = generarId();
        producto = {id:id, ...producto};
        setProductos([...productos, producto]);
        console.log("El Producto #" + id + " se guardó correctamente!");
    }

    const editarProductoContext = (id, producto) => {
        const productoEditado = productos.find(item => item.id == id);
        productoEditado.nombre = producto.nombre;
        productoEditado.precio = producto.precio;
        productoEditado.stock = producto.stock;
        productoEditado.marca = producto.marca;
        productoEditado.categoria = producto.categoria;
        productoEditado.detalles = producto.detalles;
        productoEditado.foto = producto.foto;
        productoEditado.envio = producto.envio;
        setProductos([...productos]);
        console.log("El Producto #" + id + " se modificó correctamente!");
    }

    const eliminarProductoContext = (id) => {
        const productosActualizados = productos.filter(item => item.id != id);
        setProductos([...productosActualizados]);
        console.log("El Producto #" + id + " se eliminó correctamente!");
    }

    const estaEnElCarrito = (id) => {
        return carrito.some(item => item.id == id); // false
    }

    const agregarProductoAlCarrito = (id) => { //2
        let producto;

        if (estaEnElCarrito(id)) {
            producto = carrito.find(item => item.id == id);
            producto.cantidad += 1;
            setCarrito([...carrito]);
        } else {
            producto = productos.find(item => item.id == id); // producto #2
            producto.cantidad = 1;
            setCarrito([...carrito, producto]);
        }

        console.log("Se agregó el Producto #" + id + " al Carrito!");
    }

    const eliminarProductoCarrito = (id) => {
        const carritoActualizado = carrito.filter(item => item.id != id);
        setCarrito([...carritoActualizado]);
        console.log("El Producto #" + id + " se eliminó correctamente del Carrito!");
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        console.log("Se vació el Carrito!");
    }

    const cantidadProductosCarrito = () => {
        return carrito.reduce((acumulador, item) => acumulador += item.cantidad, 0);
    }

    const sumaProductosCarrito = () => {
        return carrito.reduce((acumulador, item) => acumulador += item.precio * item.cantidad, 0);
    }

    const incrementarItemProductoCarrito = (id) => {
        const producto = carrito.find(item => item.id == id);
        producto.cantidad += 1;
        setCarrito([...carrito]);
    }

    const decrementarItemProductoCarrito = (id) => {
        const producto = carrito.find(item => item.id == id);

        if (producto.cantidad > 1) {
            producto.cantidad -= 1;
            setCarrito([...carrito]);
        } else {
            eliminarProductoCarrito(id);
        }
    }

    return <EcommerceContext.Provider value={{loading, productos, carrito, agregarProductoContext, editarProductoContext, eliminarProductoContext, agregarProductoAlCarrito, eliminarProductoCarrito, vaciarCarrito, cantidadProductosCarrito, sumaProductosCarrito, incrementarItemProductoCarrito, decrementarItemProductoCarrito}}>
        {children}
    </EcommerceContext.Provider>
}

export default EcommerceContextProvider