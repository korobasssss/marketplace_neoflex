export interface HeaderInterfaceState {
    contacts: {
        appName: string
    }
    cart: {
        countProductsCart: number
    },
    favourites: {
        countProductsFav: number
    }
}

export interface HeaderInterfaceProps {
    appName: string,
    countProductsInCart: number,
    countProductsInFav: number,

}