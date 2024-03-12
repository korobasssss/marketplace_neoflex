import {OneProductInMain} from "@/components/interfaces/oneProductInMain";

const initialValue : {products: OneProductInMain[]} = {
    products : []
}

export const cartReducer = (state = initialValue, action: any) => {
    const stateCopy = {...state}
    switch (action.type) {
        default: {
            return stateCopy
        }
    }
}