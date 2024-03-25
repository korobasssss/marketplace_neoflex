import {connect} from "react-redux";
import {AllProductsInterfaceState} from "@/app/interfaces/allProductsInterface";
import {AllProducts} from "@/app/components/allProducts/AllProducts";

const mapStateToProps = (state: AllProductsInterfaceState) => {
    return {
        products: state.products.products,
        categories: state.products.categories
    }
}

const mapDispatchToProps = {

}

export const AllProductsContainer = connect(mapStateToProps, mapDispatchToProps)(AllProducts)