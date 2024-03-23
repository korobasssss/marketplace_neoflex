'use client'

import {connect} from "react-redux";
import {Main} from "@/app/components/main/main/Main";
import {AllProductsInterfaceState} from "@/app/interfaces/allProductsInterface";
import {AllProducts} from "@/app/components/allProducts/AllProducts";

const mapStateToProps = (state: AllProductsInterfaceState) => {
    return {
        products: state.products.products,
    }
}

const mapDispatchToProps = {

}

export const AllProductsContainer = connect(mapStateToProps, mapDispatchToProps)(AllProducts)