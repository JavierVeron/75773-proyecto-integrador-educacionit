import { ADD_PRODUCT_TYPE, EDIT_PRODUCT_TYPE, DELETE_PRODUCT_TYPE } from "./productTypes";
import productos from "../../assets/productos.json";

const productReducer = async (state = productos, action) => {
    let response;
    let id;

    switch(action.type) {
        case ADD_PRODUCT_TYPE:
            response = await mockAPI.post("/productos", action.payload.product);
            id = response.data.id;
            console.log("El Producto #" + id + " se guardó correctamente!");
            return {
                ...state,
                ...response.data
            }
        default:            
            return state;
    }
}

export default productReducer