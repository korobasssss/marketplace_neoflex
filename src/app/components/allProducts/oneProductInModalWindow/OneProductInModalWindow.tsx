import {OneProductMainComponentInterface} from "@/app/interfaces/oneProductInterface";

import one_product_modal_scss from '@/app/scss/components/main/OneProductModal.module.scss'
import '@/app/scss/globals/globals.scss'
import {useRouter} from "next/navigation";
import {Path} from "@/app/path";
import Image from "next/image";
import one_product_scss from "@/app/scss/components/main/OneProductMain.module.scss";
import rate_icon from "@/assets/icons/rate.svg";
import Cookies from "js-cookie";

import close_icon from '@/assets/icons/close.svg'

export const OneProductInModalWindow = (props: OneProductMainComponentInterface) => {
    const router = useRouter()

    return (
        <section className={one_product_modal_scss.page}>
            <section className={'dark'} onClick={() => {
                Cookies.remove('id')
                Cookies.remove('index')
                router.push(Path.PRODUCTS)
            }}></section>
            <section className={'round_section ' + one_product_modal_scss.root}>
                <button className={one_product_modal_scss.button_close} onClick={() => {
                    Cookies.remove('id')
                    Cookies.remove('index')
                    router.push(Path.PRODUCTS)
                }}>
                    <Image src={close_icon} alt={'close icon'} width={0} height={0}/>
                </button>
                <section className={one_product_modal_scss.section}>
                    <Image src={props.oneProduct.img} className={one_product_modal_scss.photo} alt={'product'}
                           width={0} height={0}/>
                    <section className={one_product_modal_scss.data}>
                        <header className={'name'}>{props.oneProduct.title}</header>
                        <section className={one_product_modal_scss.description}>{props.oneProduct.description}</section>
                        <div
                            className={one_product_scss.price + ' ' + one_product_modal_scss.price}>{props.oneProduct.price} ₽
                        </div>
                        <section className={one_product_scss.section}>
                            <section className={one_product_scss.rate_section}>
                                <Image src={rate_icon} className={one_product_scss.rate_icon} alt={'rate icon'}
                                       width={0} height={0}/>
                                <div className={'no_important'}>{props.oneProduct.rate}</div>
                            </section>
                            <button onClick={() => props.setIsPressedToCart(true)}
                                    className={one_product_scss.buy_button}>
                                {props.isInCartVisual ?
                                    <div>В корзине</div> :
                                    <div>Купить</div>
                                }
                            </button>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}