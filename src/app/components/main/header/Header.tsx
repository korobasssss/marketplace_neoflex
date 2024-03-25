import '@/app/scss/globals/globals.scss'

import favourites_icon from '@/assets/icons/favourites.svg'
import cart_icon from '@/assets/icons/cart.svg'
import Image from "next/image";
import {HeaderInterfaceProps} from "@/app/interfaces/headerInterface";

import header_scss from '@/app/scss/components/main/Header.module.scss'
import {Path} from "@/app/path";

export const Header = (props: HeaderInterfaceProps) => {

    return (
        <header className={header_scss.route}>
            <a className={'title'} href={Path.PRODUCTS}>
                {props.appName}
            </a>
            <nav className={header_scss.nav}>
                <a className={header_scss.nav_buttons} href={Path.FAVOURITES}>
                    <Image src={favourites_icon} className={header_scss.icons} alt={'favourites button'}/>
                    <section className={header_scss.count}>
                        1
                    </section>
                </a>
                <a className={header_scss.nav_buttons} href={Path.CART}>
                    <Image src={cart_icon} className={header_scss.icons} alt={'cart button'}/>
                    {props.countProductsInCart > 0 ?
                        <section className={header_scss.count}>
                            {props.countProductsInCart}
                        </section> : null}
                </a>
            </nav>
        </header>
    )
}