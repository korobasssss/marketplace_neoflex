import {OneProductInterface} from "@/app/interfaces/oneProductInterface";

export interface AllProductsInterfaceState {
    products: {
        products: OneProductInterface[]
        categories: string[]
    }
}
export interface AllProductsInterfaceProps {
    products: OneProductInterface[]
    categories: string[]
}