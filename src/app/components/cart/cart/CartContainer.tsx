import {connect} from "react-redux";
import {CartInterfaceState} from "@/app/interfaces/CartInterface";
import {Cart} from "@/app/components/cart/cart/Cart";

const mapStateToProps = (state: CartInterfaceState) => {
    return {
        productsCart: state.cart.productsCart,
        price: state.cart.price
    }

}

const mapDispatchToProps = {
}

export const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)