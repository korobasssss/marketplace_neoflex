import {Dispatch} from "redux";
import {OneProductInterface} from "@/app/interfaces/oneProductInterface";
import {addCountProduct, deleteProduct, removeCountProduct, setProduct} from "@/store/reducers/cartReducer";

export const addProductToCartThunk = (product: OneProductInterface) => (dispatch: Dispatch) => {
    dispatch(setProduct(product))
}

export const deleteProductToCartThunk = (id: number) => (dispatch: Dispatch) => {
    dispatch(deleteProduct(id))
}

export const addCountProductThunk = (id: number) => (dispatch: Dispatch) => {
    dispatch(addCountProduct(id))
}

export const removeCountProductThunk = (id: number) => (dispatch: Dispatch) => {
    dispatch(removeCountProduct(id))
}