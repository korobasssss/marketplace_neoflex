import {Header} from "@/components/components/main/header/Header";
import {AllProductsInterfaceProps} from "@/components/interfaces/allProductsInterface";
import main_scss from './AllProductsMain.module.scss'
import {OneProductInMain} from "@/components/interfaces/oneProductInMain";
import {OneProductMain} from "@/components/components/main/oneProductInMain/OneProductMain";
import {FooterContainer} from "@/components/components/main/footer/FooterContainer";
import {HeaderContainer} from "@/components/components/main/header/HeaderContainer";

export const AllProductsMain = (props: AllProductsInterfaceProps) => {
    return (
        <section className={main_scss.route}>
            <HeaderContainer/>
            <ul className={main_scss.products}>
                {props.products.map((oneProduct: OneProductInMain) => {
                    return (
                    <li>
                        <OneProductMain id={oneProduct.id}
                                           img={oneProduct.img}
                                           title={oneProduct.title}
                                           price={oneProduct.price}
                                           rate={oneProduct.rate}/>
                    </li>
                    )
                })}
            </ul>
            <FooterContainer/>
        </section>
    )
}