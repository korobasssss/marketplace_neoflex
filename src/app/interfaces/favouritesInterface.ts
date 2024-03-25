import {OneProductInterface} from "@/app/interfaces/oneProductInterface";

export interface FavouritesInterfaceState {
    favourites: {
        productsFav: OneProductInterface[]
    }
    products: {
        categories: string[]
    }
}