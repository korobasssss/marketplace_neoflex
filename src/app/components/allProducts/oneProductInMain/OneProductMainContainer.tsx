import {connect} from "react-redux";
import {addCountProductThunk, addProductToCartThunk, deleteProductToCartThunk, removeCountProductThunk} from "@/store/thunk/cart";
import {OneProductState} from "@/app/interfaces/oneProductInterface";
import {OneProductMain} from "@/app/components/allProducts/oneProductInMain/OneProductMain";

const mapStateToProps = (state: OneProductState) => {
    return {
        cartProducts: state.cart.products
    }
}

const mapDispatchToProps = {
    addProductToCart: addProductToCartThunk,
    deleteProductToCart: deleteProductToCartThunk,
    addCountProduct: addCountProductThunk,
    removeCountProduct: removeCountProductThunk
}

export const OneProductMainContainer = connect(mapStateToProps, mapDispatchToProps)(OneProductMain)