import one_product_scss from '@/app/scss/components/main/OneProductMain.module.scss'
import Image from "next/image";
import rate_icon from '@/assets/icons/rate.svg'
import { OneProductMainComponentInterface } from "@/app/interfaces/oneProductInterface";

import no_like_icon from '@/assets/icons/favourites.svg'
import like_icon from '@/assets/icons/like.svg'

import '@/app/scss/globals/globals.scss'
import {useState} from "react";

export const OneProductMainComponent = (props: OneProductMainComponentInterface) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <main className={one_product_scss.root + ' round_section'}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
            {isHover ?
                <button className={one_product_scss.likeIcon} onClick={() => props.setIsPressedToFav(true)}>
                    {props.isInFavVisual ?
                        <Image src={like_icon} alt={'no like'} />
                        :
                        <Image src={no_like_icon} alt={'like'} />
                    }
                </button> : null}
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
                    <button onClick={() => props.setIsPressedToCart(true)} className={one_product_scss.buy_button}>
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