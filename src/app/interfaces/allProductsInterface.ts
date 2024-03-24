import {OneProductInterface} from "@/app/interfaces/oneProductInterface";

export interface AllProductsInterfaceState {
    products: {
        products: OneProductInterface[]
    }
}
export interface AllProductsInterfaceProps {
    products: OneProductInterface[]
}