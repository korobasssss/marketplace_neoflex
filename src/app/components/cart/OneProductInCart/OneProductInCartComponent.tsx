import {OneProductInCartComponentInterface} from "@/app/interfaces/CartInterface";
import Image from "next/image";
import delete_icon from '@/assets/icons/delete.svg'
import minus_icon from '@/assets/icons/minus.svg'
import plus_icon from '@/assets/icons/plus.svg'

import '@/app/scss/globals/globals.scss'

export const OneProductInCartComponent = (props: OneProductInCartComponentInterface) => {

    return (
        <main>
            <section className={'round_section'}>
                <section>
                    <Image src={props.oneProduct.img} alt={'product'} width={0} height={0}/>
                    <section>
                        <div>{props.oneProduct.title}</div>
                        <div>{props.oneProduct.price} ₽</div>
                    </section>
                    <button>
                        <Image src={delete_icon} alt={'delete product'} width={0} height={0}/>
                    </button>
                </section>
            </section>
            <footer>
                <section>
                    <button>
                        <Image src={minus_icon} alt={'delete product'} width={0} height={0}/>
                    </button>
                    {props.oneProduct.count}
                    <button>
                        <Image src={plus_icon} alt={'delete product'} width={0} height={0}/>
                    </button>
                </section>
                <div>{props.oneProduct.price * props.oneProduct.count} ₽</div>
            </footer>
        </main>
    )
}