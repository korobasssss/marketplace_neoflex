import {OneProductInCartComponentInterface} from "@/app/interfaces/CartInterface";
import Image from "next/image";
import delete_icon from '@/assets/icons/delete.svg'
import minus_icon from '@/assets/icons/minus.svg'
import plus_icon from '@/assets/icons/plus.svg'

import one_product_scss from '@/app/scss/components/cart/OneProductCart.module.scss'

import '@/app/scss/globals/globals.scss'

export const OneProductInCartComponent = (props: OneProductInCartComponentInterface) => {

    return (
        <main className={'round_section ' + one_product_scss.root}>
            <section className={one_product_scss.data}>
                <Image src={props.oneProduct.img} className={one_product_scss.img} alt={'product'} width={0}
                       height={0}/>
                <section className={one_product_scss.product_name}>
                    <div className={'name'}>{props.oneProduct.title}</div>
                    <div className={'no_important ' + one_product_scss.price}>{props.oneProduct.price} ₽</div>
                </section>
                <button className={one_product_scss.button}  onClick={() => props.setIsPressedRemoveFromCart(true)}>
                    <Image src={delete_icon} alt={'delete product'} width={0} height={0}/>
                </button>
            </section>
            <footer className={one_product_scss.footer}>
                <section className={one_product_scss.plus_minus}>
                    <button className={one_product_scss.button_plus_minus} onClick={() => props.setRemoveCountPressed(true)}>
                        <Image src={minus_icon} alt={'delete product'} width={0} height={0}/>
                    </button>
                    <div className={one_product_scss.count}>{props.oneProduct.count}</div>
                    <button className={one_product_scss.button_plus_minus} onClick={() => props.setAddCountPressed(true)}>
                        <Image src={plus_icon} alt={'add product'} width={0} height={0}/>
                    </button>
                </section>
                <div className={'no_important ' + one_product_scss.final_price}>
                    {props.oneProduct.price * props.oneProduct.count} ₽
                </div>
            </footer>
        </main>
    )
}