import {OneProductInCartComponent} from "@/app/components/cart/OneProductInCart/OneProductInCartComponent";
import {useEffect, useState} from "react";
import {OneProductInCartInterface} from "@/app/interfaces/CartInterface";

export const OneProductInCart = (props: OneProductInCartInterface) => {

    const [isPressedRemoveFromCart, setIsPressedRemoveFromCart] = useState(false)
    const [addCountPressed, setAddCountPressed] = useState(false)
    const [removeCountPressed, setRemoveCountPressed] = useState(false)

    useEffect(() => {
        if (addCountPressed) {
            props.addCountProduct(props.oneProduct.id)
        }
        setAddCountPressed(false)
    }, [addCountPressed]);

    useEffect(() => {
        if (removeCountPressed) {
            props.removeCountProduct(props.oneProduct.id)
        }
        setRemoveCountPressed(false)
    }, [removeCountPressed]);

    useEffect(() => {
        if (isPressedRemoveFromCart) {
            props.deleteProductToCart(props.oneProduct.id)
        }
        setIsPressedRemoveFromCart(false)
    }, [isPressedRemoveFromCart]);


    return <OneProductInCartComponent oneProduct={props.oneProduct}
                                      setAddCountPressed={setAddCountPressed}
                                      setRemoveCountPressed={setRemoveCountPressed}
                                      setIsPressedRemoveFromCart={setIsPressedRemoveFromCart}/>
}