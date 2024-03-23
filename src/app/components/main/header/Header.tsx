import '@/app/scss/globals/globals.scss'

import favourites_icon from '@/assets/icons/favourites.svg'
import cart_icon from '@/assets/icons/cart.svg'
import Image from "next/image";
import {HeaderInterfaceProps} from "@/app/interfaces/headerInterface";

import header_scss from '@/app/scss/components/main/Header.module.scss'

export const Header = (props: HeaderInterfaceProps) => {
    return (
        <header className={header_scss.route}>
            <div className={'title'}>{props.appName}</div>
            <nav className={header_scss.nav}>
                <button className={header_scss.nav_buttons}>
                    <Image src={favourites_icon} className={header_scss.icons} alt={'favourites button'}/>
                    <section className={header_scss.count}>
                        1
                    </section>
                </button>
                <button className={header_scss.nav_buttons}>
                    <Image src={cart_icon} className={header_scss.icons} alt={'cart button'}/>
                    <section className={header_scss.count}>
                        1
                    </section>
                </button>
            </nav>
        </header>
    )
}