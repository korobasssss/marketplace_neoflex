import one_product_scss from '@/app/scss/components/main/OneProductMain.module.scss'
import Image from "next/image";
import rate_icon from '@/assets/icons/rate.svg'
import {OneProductInMain} from "@/app/interfaces/oneProductInMain";

export const OneProductMain = (props: OneProductInMain) => {
    return (
        <main className={one_product_scss.root}>
            <picture className={one_product_scss.image_section}>
                <Image src={props.img} className={one_product_scss.image} alt={'product'}
                       width={0} height={0}/>
            </picture>
            <footer className={one_product_scss.info}>
                <section className={one_product_scss.section}>
                    <div className={one_product_scss.name}>{props.title}</div>
                    <div className={one_product_scss.price}>{props.price} ₽</div>
                </section>
                <section className={one_product_scss.section}>
                    <section className={one_product_scss.rate_section}>
                        <Image src={rate_icon} className={one_product_scss.rate_icon} alt={'rate icon'}
                               width={0} height={0}/>
                        <div className={one_product_scss.rate}>{props.rate}</div>
                    </section>
                    <button>Купить</button>
                </section>
            </footer>
        </main>
    )
}