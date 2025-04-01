import { ADD_PRODUCT_TO_CART_TYPE, DELETE_PRODUCT_FROM_CART_TYPE, EMPTY_CART_TYPE, INCREASE_ITEM_TYPE, DECREASE_ITEM_TYPE } from "./cartTypes";

const loadCartLS = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

const saveCartLS = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

const cartReducer = async (state = [], action) => {
    let cart;
    let product;
    console.log("hola #1");
    

    switch(action.type) {
        case ADD_PRODUCT_TO_CART_TYPE:
            console.log("hola");
            cart = loadCartLS();
            product = cart.find(item => item.id == action.payload);

            if (product) {
                product.quantity++;
                cart = [...cart];
            } else {
                product = {id:action.payload, quantity:1};
                cart = [...cart, product];
            }

            saveCartLS(cart);
            console.log("El Producto #" + id + " se guardó correctamente!");
            
            return cart;
        default:
            return loadCartLS();
    }
}

export default cartReducer