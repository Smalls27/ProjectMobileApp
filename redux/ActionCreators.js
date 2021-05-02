import * as ActionTypes from "./ActionTypes";


export const addProductToCart = id => ({
    type: ActionTypes.ADD_PRODUCT,
    payload: id
})

export const removeProductFromCart = id => ({
    type: ActionTypes.REMOVE_PRODUCT,
    payload: id
})

export const clearCart = () => ({
    type: ActionTypes.CLEAR_CART
})

export const increaseProductQuantity = id => ({
    type: ActionTypes.ADD_QUANTITY,
    payload: id
})

export const decreaseProductQuantity = id => ({
    type: ActionTypes.SUBTRACT_QUANTITY,
    payload: id
})

export const colorChange = id => ({
    type: ActionTypes.COLOR_CHANGE,
    payload: id
})