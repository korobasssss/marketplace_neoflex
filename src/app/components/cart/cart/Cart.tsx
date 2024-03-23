import {CartInterface, OneProductCartInterface} from "@/app/interfaces/CartInterface";
import {OneProductInCartContainer} from "@/app/components/cart/OneProductInCart/OneProductInCartContainer";

export const Cart = (props: CartInterface) => {
    return (
        <section>
            <main>
                <header>Корзина</header>
                <ul>
                    {props.products.map((oneProduct: OneProductCartInterface) => {
                        return (
                            <li key={oneProduct.id}>
                                <OneProductInCartContainer oneProduct={oneProduct}/>
                            </li>
                        )
                    })}
                </ul>
            </main>
            <aside>
                <main>
                    <div>ИТОГО</div>
                    <div>₽ {props.price}</div>
                </main>
                <button>
                    Перейти к оформлению
                </button>
            </aside>
        </section>
    )
}