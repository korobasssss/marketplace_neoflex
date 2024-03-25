'use client'

import {HeaderContainer} from "@/app/components/main/header/HeaderContainer";
import {FooterContainer} from "@/app/components/main/footer/FooterContainer";

import main_scss from '@/app/scss/components/main/Main.module.scss'
import {usePathname} from "next/navigation";
import {Path} from "@/app/path";
import {AllProductsContainer} from "@/app/components/allProducts/AllProductsContainer";
import {CartContainer} from "@/app/components/cart/cart/CartContainer";
import {FavouritesContainer} from "@/app/components/favourites/FavoutiesContainer";

export const Main = () => {
    const pathname = usePathname()
    return (
        <main className={main_scss.page}>
            <section className={main_scss.route}>
                <HeaderContainer/>
                {pathname === Path.PRODUCTS ? <AllProductsContainer/> :
                    pathname === Path.CART ? <CartContainer/> :
                    pathname === Path.FAVOURITES ? <FavouritesContainer/> : null}
                <FooterContainer/>
            </section>
        </main>

    )
}