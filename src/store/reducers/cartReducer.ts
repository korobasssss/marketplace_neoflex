import {OneProductInterface} from "@/app/interfaces/oneProductInterface";
import {OneProductCartInterface} from "@/app/interfaces/CartInterface";

const SET_PRODUCT_CART = 'SET_PRODUCT'
const DELETE_PRODUCT_CART = 'DELETE_PRODUCT'

const ADD_COUNT_PRODUCT = 'ADD_COUNT_PRODUCT'
const REMOVE_COUNT_PRODUCT = 'REMOVE_COUNT_PRODUCT'


const initialValue: { productsCart: OneProductCartInterface[], countProductsCart: number , price: number} = {
    productsCart: [],
    countProductsCart: 0,
    price: 0
}

export const cartReducer = (state = initialValue, action: any) => {
    const stateCopy = {...state}
    switch (action.type) {
        case SET_PRODUCT_CART: {
            action.product.count = 1
            stateCopy.productsCart.push(action.product)

            stateCopy.countProductsCart = stateCopy.countProductsCart + 1
            stateCopy.price = stateCopy.price + action.product.price

            return stateCopy
        }

        case DELETE_PRODUCT_CART: {
            for (let i = 0; i < stateCopy.productsCart.length; i++) {
                if (stateCopy.productsCart[i].id === action.id) {
                    stateCopy.price = stateCopy.price - stateCopy.productsCart[i].price * stateCopy.productsCart[i].count

                    stateCopy.productsCart.splice(i, 1)
                }
            }
            stateCopy.countProductsCart = stateCopy.countProductsCart - 1

            return stateCopy
        }

        case ADD_COUNT_PRODUCT: {
            for (let i = 0; i < stateCopy.productsCart.length; i++) {
                if (stateCopy.productsCart[i].id === action.id) {
                    stateCopy.productsCart[i].count = stateCopy.productsCart[i].count + 1

                    stateCopy.price = stateCopy.price + stateCopy.productsCart[i].price
                }
            }

            return stateCopy
        }

        case REMOVE_COUNT_PRODUCT: {
            for (let i = 0; i < stateCopy.productsCart.length; i++) {
                if (stateCopy.productsCart[i].id === action.id && stateCopy.productsCart[i].count > 1) {
                    stateCopy.productsCart[i].count = stateCopy.productsCart[i].count - 1

                    stateCopy.price = stateCopy.price - stateCopy.productsCart[i].price
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
        type: SET_PRODUCT_CART, product
    }
}
export const deleteProduct = (id: number) => {
    return {
        type: DELETE_PRODUCT_CART, id
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