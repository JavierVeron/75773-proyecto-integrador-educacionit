import { ADD_PRODUCT_TYPE, EDIT_PRODUCT_TYPE, DELETE_PRODUCT_TYPE } from "./productTypes";
import mockAPI from "../mockAPI";

const productReducer = async (state = [], action) => {
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
            response = await mockAPI.get("/productos");
            state = response.data;
            
            return state;
    }
}

export default productReducer