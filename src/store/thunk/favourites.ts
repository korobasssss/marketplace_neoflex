import {OneProductInterface} from "@/app/interfaces/oneProductInterface";
import {Dispatch} from "redux";
import {deleteProductFromFav, setProductToFav} from "@/store/reducers/favouritesReducer";

export const addProductToFavouritesThunk = (product: OneProductInterface) => (dispatch: Dispatch) => {
    dispatch(setProductToFav(product))
}

export const deleteProductFromFavouritesThunk = (id: number) => (dispatch: Dispatch) => {
    dispatch(deleteProductFromFav(id))
}