import { ADD_PRODUCT_TYPE, EDIT_PRODUCT_TYPE, DELETE_PRODUCT_TYPE } from "./productTypes";

export const ADD_PRODUCT_ACTION = {type:ADD_PRODUCT_TYPE, payload:product};
export const EDIT_PRODUCT_ACTION = {type:EDIT_PRODUCT_TYPE, payload:{id:id, product:product}};
export const DELETE_PRODUCT_ACTION = {type:DELETE_PRODUCT_TYPE, payload:id};