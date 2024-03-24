import {connect} from "react-redux";
import {HeaderInterfaceState} from "@/app/interfaces/headerInterface";
import {Header} from "@/app/components/main/header/Header";

const mapStateToProps = (state: HeaderInterfaceState) => {
    return {
        appName: state.contacts.appName,
        countProductsInCart: state.cart.countProducts
    }
}

const mapDispatchToProps = {

}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)