import one_product_scss from '@/app/scss/components/main/OneProductMain.module.scss'
import Image from "next/image";
import rate_icon from '@/assets/icons/rate.svg'
import { OneProductMainComponentInterface } from "@/app/interfaces/oneProductInterface";

import '@/app/scss/globals/globals.scss'

export const OneProductMainComponent = (props: OneProductMainComponentInterface) => {

    return (
        <main className={one_product_scss.root + ' round_section'}>
            <picture className={one_product_scss.image_section}>
                <Image src={props.oneProduct.img} className={one_product_scss.image} alt={'product'}
                       width={0} height={0}/>
            </picture>
            <footer className={one_product_scss.info}>
                <section className={one_product_scss.section}>
                    <div className={'name'}>{props.oneProduct.title}</div>
                    <div className={one_product_scss.price}>{props.oneProduct.price} ₽</div>
                </section>
                <section className={one_product_scss.section}>
                    <section className={one_product_scss.rate_section}>
                        <Image src={rate_icon} className={one_product_scss.rate_icon} alt={'rate icon'}
                               width={0} height={0}/>
                        <div className={'no_important'}>{props.oneProduct.rate}</div>
                    </section>
                    <button onClick={() => props.setIsPressedToCart(true)}>
                        {props.isInCartVisual ?
                            <div>В корзине</div> :
                            <div>Купить</div>
                        }
                    </button>
                </section>
            </footer>
        </main>
    )
}