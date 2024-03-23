import {AllProductsInterfaceProps} from "@/app/interfaces/allProductsInterface";
import {HeaderContainer} from "@/app/components/main/header/HeaderContainer";
import {OneProductInMain} from "@/app/interfaces/oneProductInMain";
import {OneProductMain} from "@/app/components/allProducts/oneProductInMain/OneProductMain";
import {FooterContainer} from "@/app/components/main/footer/FooterContainer";

import main_scss from '@/app/scss/components/main/AllProductsMain.module.scss'

export const AllProducts = (props: AllProductsInterfaceProps) => {
    return (
        <ul className={main_scss.products}>
            {props.products.map((oneProduct: OneProductInMain) => {
                return (
                    <li key={oneProduct.id}>
                        <OneProductMain id={oneProduct.id}
                                        img={oneProduct.img}
                                        title={oneProduct.title}
                                        price={oneProduct.price}
                                        rate={oneProduct.rate}/>
                    </li>
                )
            })}
        </ul>

    )
}