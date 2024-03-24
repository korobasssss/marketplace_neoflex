import {CartInterface, OneProductCartInterface} from "@/app/interfaces/CartInterface";
import {OneProductInCartContainer} from "@/app/components/cart/OneProductInCart/OneProductInCartContainer";

import cart_scss from '@/app/scss/components/cart/Cart.module.scss'

export const Cart = (props: CartInterface) => {
    return (
        <section className={cart_scss.root}>
            <header className={cart_scss.header}>Корзина</header>
            <section className={cart_scss.columns}>
                <ul className={cart_scss.products}>
                    {props.products.map((oneProduct: OneProductCartInterface) => {
                        return (
                            <li key={oneProduct.id}>
                                <OneProductInCartContainer oneProduct={oneProduct}/>
                            </li>
                        )
                    })}
                </ul>
                <aside className={'round_section'}>
                    <main>
                        <div>ИТОГО</div>
                        <div>₽ {props.price}</div>
                    </main>
                    <button>
                        Перейти к оформлению
                    </button>
                </aside>
            </section>

        </section>
    )
}