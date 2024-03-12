import {AllProductsInterfaceState} from "@/components/interfaces/allProductsInterface";
import {AllProductsMain} from "@/components/components/main/allProducts/AllProductsMain";
import {connect} from "react-redux";

const mapStateToProps = (state: AllProductsInterfaceState) => {
    return {
        products: state.products.products
    }
}

const mapDispatchToProps = {

}

export const AllProductsContainer = connect(mapStateToProps, mapDispatchToProps)(AllProductsMain)