export interface HeaderInterfaceState {
    contacts: {
        appName: string
    }
    cart: {
        countProducts: number
    }
}

export interface HeaderInterfaceProps {
    appName: string,
    countProductsInCart: number
}