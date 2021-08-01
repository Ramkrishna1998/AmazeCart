import {ActionTypes} from "../constants/actionTypes"

export const setProduct = (products) =>{
    return{
        type: ActionTypes.SET_PRODUCT,
        payload: products
    }
}

export const selectProduct = (product) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = (products) =>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: products
    }
}