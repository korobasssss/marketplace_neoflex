import '@/app/scss/globals/globals.scss'

import favourites_icon from '@/assets/icons/favourites.svg'
import cart_icon from '@/assets/icons/cart.svg'
import Image from "next/image";
import {HeaderInterfaceProps} from "@/app/interfaces/headerInterface";

import header_scss from '@/app/scss/components/main/Header.module.scss'
import {useRouter} from "next/navigation";
import {Path} from "@/app/path";

export const Header = (props: HeaderInterfaceProps) => {
    const router = useRouter()

    return (
        <header className={header_scss.route}>
            <button className={'title'}  onClick={() => router.push(Path.PRODUCTS)}>
                {props.appName}
            </button>
            <nav className={header_scss.nav}>
                <button className={header_scss.nav_buttons}>
                    <Image src={favourites_icon} className={header_scss.icons} alt={'favourites button'}/>
                    <section className={header_scss.count}>
                        1
                    </section>
                </button>
                <button className={header_scss.nav_buttons} onClick={() => router.push(Path.CART)}>
                    <Image src={cart_icon} className={header_scss.icons} alt={'cart button'}/>
                    {props.countProductsInCart > 0 ?
                        <section className={header_scss.count}>
                            {props.countProductsInCart}
                        </section> : null}
                </button>
            </nav>
        </header>
    )
}