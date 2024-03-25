import {OneProductInterface} from "@/app/interfaces/oneProductInterface";
import {OneProductCartInterface} from "@/app/interfaces/CartInterface";

const SET_PRODUCT_FAV = 'SET_PRODUCT_FAV'
const DELETE_PRODUCT_FAV = 'DELETE_PRODUCT_FAV'


const initialValue: { productsFav: OneProductCartInterface[], countProductsFav: number} = {
    productsFav: [],
    countProductsFav: 0
}

export const favouritesReducer = (state = initialValue, action: any) => {
    const stateCopy = {...state}
    switch (action.type) {
        case SET_PRODUCT_FAV: {
            action.product.count = 1
            stateCopy.productsFav.push(action.product)

            stateCopy.countProductsFav = stateCopy.countProductsFav + 1

            console.log(stateCopy)

            return stateCopy
        }

        case DELETE_PRODUCT_FAV: {
            for (let i = 0; i < stateCopy.productsFav.length; i++) {
                if (stateCopy.productsFav[i].id === action.id) {

                    stateCopy.productsFav.splice(i, 1)
                }
            }
            stateCopy.countProductsFav = stateCopy.countProductsFav - 1

            return stateCopy
        }

        default: {
            return stateCopy
        }
    }
}

export const setProductToFav = (product: OneProductInterface) => {
    return {
        type: SET_PRODUCT_FAV, product
    }
}
export const deleteProductFromFav = (id: number) => {
    return {
        type: DELETE_PRODUCT_FAV, id
    }
}