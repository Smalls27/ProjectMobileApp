import * as ActionTypes from "./ActionTypes";


export const addProductToCart = id => ({
    type: ActionTypes.ADD_PRODUCT,
    payload: id
})

export const removeProductFromCart = id => ({
    type: ActionTypes.REMOVE_PRODUCT,
    payload: id
})

export const increaseProductQuantity = id => ({
    type: ActionTypes.ADD_QUANTITY,
    payload: id
})

export const decreaseProductQuantity = id => ({
    type: ActionTypes.SUBTRACT_QUANTITY,
    payload: id
})

export const addingUpQuantity = () => ({
    type: ActionTypes.ADDING_UP_QUANTITY
})