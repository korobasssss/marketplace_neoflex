import {OneProductCartInterface} from "@/app/interfaces/CartInterface";

export interface OneProductInterface {
    id: number
    img: string,
    title: string,
    price: number,
    rate: number,
    category: string
}

export interface OneProductState {
    cart: {
        products: OneProductCartInterface[]
    }
}

export interface OneProductMainInterface {
    oneProduct: OneProductInterface
    cartProducts: OneProductCartInterface[]

    addProductToCart(product: OneProductInterface): void
    deleteProductToCart(id: number): void
}

export interface OneProductMainComponentInterface {
    oneProduct: OneProductInterface

    isInCartVisual: boolean
    setIsPressedToCart(flag: boolean): void
}