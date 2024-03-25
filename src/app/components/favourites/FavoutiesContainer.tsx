import {connect} from "react-redux";
import {AllProductsInterfaceState} from "@/app/interfaces/allProductsInterface";
import {AllProducts} from "@/app/components/allProducts/AllProducts";
import {FavouritesInterfaceState} from "@/app/interfaces/favouritesInterface";

const mapStateToProps = (state: FavouritesInterfaceState) => {
    return {
        products: state.favourites.productsFav,
        categories: state.products.categories
    }
}

const mapDispatchToProps = {

}

export const FavouritesContainer = connect(mapStateToProps, mapDispatchToProps)(AllProducts)