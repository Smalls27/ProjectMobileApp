import * as ActionTypes from "./ActionTypes";


export const addProductToCart = id => ({
    type: ActionTypes.ADD_PRODUCT,
    payload: id
})

export const removeProductFromCart = id => ({
    type: ActionTypes.REMOVE_PRODUCT,
    payload: id
})

export const addQuantity = id => ({
    type: ActionTypes.ADD_QUANTITY,
    payload: id
})

export const removeQuantity = id => ({
    type: ActionTypes.REMOVE_PRODUCT,
    payload: id
})