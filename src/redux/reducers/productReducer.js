import {ActionTypes} from "../constants/actionTypes"

const initialState = {
    products: [
        {
            id: 1,
            title: "Ramkrishna",
            category: "Developer"
        }
    ]
}

export const productReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.SET_PRODUCT:
            return state;
        default:
            return state;
    }
}