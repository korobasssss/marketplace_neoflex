import {OneProductInMain} from "@/components/interfaces/oneProductInMain";

export interface AllProductsInterfaceState {
    products: {
        products: OneProductInMain[]
    }
}
export interface AllProductsInterfaceProps {
    products: OneProductInMain[]
}