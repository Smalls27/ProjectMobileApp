import * as ActionTypes from "./ActionTypes";
import { PRODUCTS } from "../shared/products";

export const initialState = {
    products: PRODUCTS,
    addedProductsToBuy: [],
    total: 0,
    totalQuantity: 0
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

        case ActionTypes.ADD_QUANTITY:
            const productQuantityToIncrease = state.addedProductsToBuy.find(product => product.id === action.payload)
            const newPrice = state.total + productQuantityToIncrease.price
            productQuantityToIncrease.quantity++
            return {...state, total: newPrice}

        case ActionTypes.SUBTRACT_QUANTITY:
            const productQuantityToDescrease = state.addedProductsToBuy.find(product => product.id === action.payload)
            const modifiedPrice = state.total - productQuantityToDescrease.price
            productQuantityToDescrease.quantity--

            if (productQuantityToDescrease.quantity === 0) {
                const leftOverProduct = state.addedProductsToBuy.filter(product => product.id !== action.payload)
                const adjustedPrice = state.total - productQuantityToDescrease.price
            
                return {...state, addedProductsToBuy: leftOverProduct, total: adjustedPrice}
            }
            return {...state, total: modifiedPrice}

        case ActionTypes.ADDING_UP_QUANTITY:
            const quantityList = state.addedProductsToBuy.map(product => product.quantity);
            const totalQuantityAmount = state.totalQuantity + quantityList.reduce((a, b) => a + b)

            return {...state, totalQuantity: totalQuantityAmount}
            
        default:
            return state
    }
}