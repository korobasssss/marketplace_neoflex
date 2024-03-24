import {connect} from "react-redux";
import {addCountProductThunk, deleteProductToCartThunk, removeCountProductThunk} from "@/store/thunk/cart";
import {OneProductState} from "@/app/interfaces/oneProductInterface";
import {OneProductInCart} from "@/app/components/cart/OneProductInCart/OneProductInCart";

const mapStateToProps = (state: OneProductState) => {
    return {
        cartProducts: state.cart.products
    }
}

const mapDispatchToProps = {
    deleteProductToCart: deleteProductToCartThunk,
    addCountProduct: addCountProductThunk,
    removeCountProduct: removeCountProductThunk
}

export const OneProductInCartContainer = connect(mapStateToProps, mapDispatchToProps)(OneProductInCart)