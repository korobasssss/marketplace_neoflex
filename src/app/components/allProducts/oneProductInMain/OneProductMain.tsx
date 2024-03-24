import {OneProductMainComponent} from "@/app/components/allProducts/oneProductInMain/OneProductMainComponent";
import {OneProductMainInterface} from "@/app/interfaces/oneProductInterface";
import {useEffect, useState} from "react";

export const OneProductMain = (props: OneProductMainInterface) => {

    const [isInCartVisual, setIsInCartVisual] = useState(false)
    const [isPressedToCart, setIsPressedToCart] = useState(false)

    useEffect(() => {
        for (let i = 0; i < props.cartProducts.length; i++) {
            if (props.cartProducts[i].id === props.oneProduct.id) {
                setIsInCartVisual(true)
                break
            }
        }
    }, []);

    useEffect(() => {
        if (isPressedToCart) {
            if (!isInCartVisual) {
                props.addProductToCart(props.oneProduct)
                setIsInCartVisual(true)
            } else {
                props.deleteProductToCart(props.oneProduct.id)
                setIsInCartVisual(false)
            }
        }
        setIsPressedToCart(false)
    }, [isPressedToCart]);


    return <OneProductMainComponent oneProduct={props.oneProduct}
                                    isInCartVisual={isInCartVisual}
                                    setIsPressedToCart={setIsPressedToCart}/>
}