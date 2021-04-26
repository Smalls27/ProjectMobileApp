import * as ActionTypes from "./ActionTypes";
import { PRODUCTS } from "../shared/products";

export const initialState = {
    products: PRODUCTS,
    addedProductsToBuy: [],
    total: 0
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.ADD_PRODUCT:
            const productToBuy = state.products.find(product => product.id === action.payload)
            const existedItem = state.addedProductsToBuy.find(product => action.payload === product.id)
            
            if(existedItem) {
                productToBuy.quantity += 1 
                return {...state, total: state.total + productToBuy.price}
            } else {
                productToBuy.quantity = 1;
                //calculating the total
                let newTotal = state.total + productToBuy.price 
                return {...state, addedProductsToBuy: [...state.addedProductsToBuy, productToBuy], total : newTotal }
            }
        
        case ActionTypes.REMOVE_PRODUCT:
            const productToRemove = state.addedProductsToBuy.find(product => product.id === action.payload)
            const remainingItems = state.addedProductsToBuy.filter(product => product.id !== action.payload)
            const newTotal = state.total - (productToRemove.price * productToRemove.quantity )
            return {...state, addedProductsToBuy: remainingItems, total: newTotal}
            
        default:
            return state
    }
}