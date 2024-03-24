import {OneProductInterface} from "@/app/interfaces/oneProductInterface";
import {OneProductCartInterface} from "@/app/interfaces/CartInterface";

const SET_PRODUCT = 'SET_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

const ADD_COUNT_PRODUCT = 'ADD_COUNT_PRODUCT'
const REMOVE_COUNT_PRODUCT = 'REMOVE_COUNT_PRODUCT'


const initialValue: { products: OneProductCartInterface[], countProducts: number , price: number} = {
    products: [],
    countProducts: 0,
    price: 0
}

export const cartReducer = (state = initialValue, action: any) => {
    const stateCopy = {...state}
    switch (action.type) {
        case SET_PRODUCT: {
            action.product.count = 1
            stateCopy.products.push(action.product)

            stateCopy.countProducts = stateCopy.countProducts + 1
            stateCopy.price = stateCopy.price + action.product.price

            return stateCopy
        }

        case DELETE_PRODUCT: {
            for (let i = 0; i < stateCopy.products.length; i++) {
                if (stateCopy.products[i].id === action.id) {
                    stateCopy.price = stateCopy.price - stateCopy.products[i].price * stateCopy.products[i].count

                    stateCopy.products.splice(i, 1)
                }
            }
            stateCopy.countProducts = stateCopy.countProducts - 1

            return stateCopy
        }

        case ADD_COUNT_PRODUCT: {
            for (let i = 0; i < stateCopy.products.length; i++) {
                if (stateCopy.products[i].id === action.id) {
                    stateCopy.products[i].count = stateCopy.products[i].count + 1

                    stateCopy.price = stateCopy.price + stateCopy.products[i].price
                }
            }

            return stateCopy
        }

        case REMOVE_COUNT_PRODUCT: {
            for (let i = 0; i < stateCopy.products.length; i++) {
                if (stateCopy.products[i].id === action.id && stateCopy.products[i].count > 1) {
                    stateCopy.products[i].count = stateCopy.products[i].count - 1

                    stateCopy.price = stateCopy.price - stateCopy.products[i].price
                }
            }

            return stateCopy
        }

        default: {
            return stateCopy
        }
    }
}

export const setProduct = (product: OneProductInterface) => {
    return {
        type: SET_PRODUCT, product
    }
}
export const deleteProduct = (id: number) => {
    return {
        type: DELETE_PRODUCT, id
    }
}
export const addCountProduct = (id: number) => {
    return {
        type: ADD_COUNT_PRODUCT, id
    }
}
export const removeCountProduct = (id: number) => {
    return {
        type: REMOVE_COUNT_PRODUCT, id
    }
}