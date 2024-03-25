import {connect} from "react-redux";
import {addCountProductThunk, addProductToCartThunk, deleteProductToCartThunk, removeCountProductThunk} from "@/store/thunk/cart";
import {OneProductState} from "@/app/interfaces/oneProductInterface";
import {OneProductMain} from "@/app/components/allProducts/oneProductInMain/OneProductMain";
import {addProductToFavouritesThunk, deleteProductFromFavouritesThunk} from "@/store/thunk/favourites";

const mapStateToProps = (state: OneProductState) => {
    return {
        cartProducts: state.cart.productsCart,
        favProducts: state.favourites.productsFav
    }
}

const mapDispatchToProps = {
    addProductToCart: addProductToCartThunk,
    addProductToFavourites: addProductToFavouritesThunk,
    deleteProductFromFavourites: deleteProductFromFavouritesThunk,
    deleteProductToCart: deleteProductToCartThunk,
    addCountProduct: addCountProductThunk,
    removeCountProduct: removeCountProductThunk
}

export const OneProductMainContainer = connect(mapStateToProps, mapDispatchToProps)(OneProductMain)