import {OneProductMainComponent} from "@/app/components/allProducts/oneProductInMain/OneProductMainComponent";
import {OneProductMainInterface} from "@/app/interfaces/oneProductInterface";
import {useEffect, useState} from "react";

export const OneProductMain = (props: OneProductMainInterface) => {

    const [isInCartVisual, setIsInCartVisual] = useState(false)
    const [isInFavVisual, setIsInFavVisual] = useState(false)
    const [isPressedToCart, setIsPressedToCart] = useState(false)
    const [isPressedToFav, setIsPressedToFav] = useState(false)

    useEffect(() => {
        for (let i = 0; i < props.cartProducts.length; i++) {
            if (props.cartProducts[i].id === props.oneProduct.id) {
                setIsInCartVisual(true)
                break
            }
        }
        for (let i = 0; i < props.favProducts.length; i++) {
            if (props.favProducts[i].id === props.oneProduct.id) {
                setIsInFavVisual(true)
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

    useEffect(() => {
        if (isPressedToFav) {
            if (!isInFavVisual) {
                props.addProductToFavourites(props.oneProduct)
                setIsInFavVisual(true)
            } else {
                props.deleteProductFromFavourites(props.oneProduct.id)
                setIsInFavVisual(false)
            }
        }
        setIsPressedToFav(false)
    }, [isPressedToFav]);


    return <OneProductMainComponent oneProduct={props.oneProduct}
                                    isInCartVisual={isInCartVisual}
                                    setIsPressedToCart={setIsPressedToCart}
                                    setIsPressedToFav={setIsPressedToFav}
                                    isInFavVisual={isInFavVisual}/>
}