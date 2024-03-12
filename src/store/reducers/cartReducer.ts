import {OneProductInMain} from "@/components/interfaces/oneProductInMain";

const initialValue: { products: OneProductInMain[], countProducts: number } = {
    products: [],
    countProducts: 0
}

export const cartReducer = (state = initialValue, action: any) => {
    const stateCopy = {...state}
    switch (action.type) {
        default: {
            return stateCopy
        }
    }
}