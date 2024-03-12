import {OneProductInMain} from "@/components/interfaces/oneProductInMain";
import one_product_scss from './OneProductMain.module.scss'
import Image from "next/image";
import rate_icon from '@/assets/icons/rate.svg'

export const OneProductMain = (props: OneProductInMain) => {
    return (
        <main className={one_product_scss.root}>
            <img src={props.img} className={one_product_scss.image} alt={'product'}/>
            <footer className={one_product_scss.info}>
                <section className={one_product_scss.section}>
                    <div className={one_product_scss.name}>{props.title}</div>
                    <div className={one_product_scss.price}>{props.price} ₽</div>
                </section>
                <section className={one_product_scss.section}>
                    <section className={one_product_scss.rate_section}>
                        <Image src={rate_icon} className={one_product_scss.rate_icon} alt={'rate icon'}/>
                        <div className={one_product_scss.rate}>{props.rate}</div>
                    </section>
                    <button>Купить</button>
                </section>
            </footer>
        </main>
    )
}