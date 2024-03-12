import {connect} from "react-redux";
import {Cart} from "@/components/components/cart/cart/Cart";
import {CartInterfaceState} from "@/components/interfaces/CartInterface";

const mapStateToProps = (state: CartInterfaceState) => {
    return {
        products: state.cart.products
    }
}

const mapDispatchToProps = {

}

 export const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)