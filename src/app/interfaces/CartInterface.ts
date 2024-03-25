export interface OneProductCartInterface {
    id: number
    img: string,
    title: string,
    price: number,
    rate: number,
    count: number,
    category: string
}

export interface CartInterfaceState {
    cart: {
        products: OneProductCartInterface[],
        price: number
    }
}

export interface CartInterface {
    products: OneProductCartInterface[]
    price: number
}



export interface OneProductInCartInterface {
    oneProduct: OneProductCartInterface

    deleteProductToCart(id: number): void
    addCountProduct(id: number): void
    removeCountProduct(id: number): void
}

export interface OneProductInCartComponentInterface {
    oneProduct: OneProductCartInterface

    setAddCountPressed(flag: boolean): void
    setRemoveCountPressed(flag: boolean): void
    setIsPressedRemoveFromCart(flag: boolean): void
}