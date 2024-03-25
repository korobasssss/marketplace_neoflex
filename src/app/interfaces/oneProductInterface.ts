import {OneProductCartInterface} from "@/app/interfaces/CartInterface";

export interface OneProductInterface {
    id: number
    img: string,
    title: string,
    price: number,
    rate: number,
    category: string,
    description: string
}

export interface OneProductState {
    cart: {
        productsCart: OneProductCartInterface[]
    },
    favourites: {
        productsFav: OneProductCartInterface[]
    }
}

export interface OneProductMainInterface {
    flag: boolean

    oneProduct: OneProductInterface
    cartProducts: OneProductCartInterface[]
    favProducts: OneProductCartInterface[]

    addProductToCart(product: OneProductInterface): void
    deleteProductToCart(id: number): void

    addProductToFavourites(product: OneProductInterface): void
    deleteProductFromFavourites(id: number): void
}

export interface OneProductMainComponentInterface {
    oneProduct: OneProductInterface

    isInCartVisual: boolean
    isInFavVisual: boolean
    setIsPressedToCart(flag: boolean): void
    setIsPressedToFav(flag: boolean): void
}