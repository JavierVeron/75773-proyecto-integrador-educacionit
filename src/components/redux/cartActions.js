import { ADD_PRODUCT_TO_CART_TYPE, DELETE_PRODUCT_FROM_CART_TYPE, EMPTY_CART_TYPE, INCREASE_ITEM_TYPE, DECREASE_ITEM_TYPE } from "./cartTypes";

export const ADD_PRODUCT_TO_CART_ACTION = (id) => ({type:ADD_PRODUCT_TO_CART_TYPE, payload:id});
export const DELETE_PRODUCT_FROM_CART_ACTION = (id) => ({type:DELETE_PRODUCT_FROM_CART_TYPE, payload:id});
export const EMPTY_CART_ACTION = () => ({type:EMPTY_CART_TYPE});
export const INCREASE_ITEM_ACTION = (id) => ({type:INCREASE_ITEM_TYPE, payload:id});
export const DECREASE_ITEM_ACTION = (id) => ({type:DECREASE_ITEM_TYPE, payload:id});