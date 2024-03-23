import {OneProductInMain} from "@/app/interfaces/oneProductInMain";

export interface AllProductsInterfaceState {
    products: {
        products: OneProductInMain[]
    }
}
export interface AllProductsInterfaceProps {
    products: OneProductInMain[]
}