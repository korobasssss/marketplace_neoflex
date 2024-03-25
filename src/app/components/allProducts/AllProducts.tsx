import {AllProductsInterfaceProps} from "@/app/interfaces/allProductsInterface";
import {OneProductInterface} from "@/app/interfaces/oneProductInterface";

import main_scss from '@/app/scss/components/main/AllProductsMain.module.scss'
import {OneProductMainContainer} from "@/app/components/allProducts/oneProductInMain/OneProductMainContainer";
import '@/app/scss/globals/globals.scss'
import {usePathname} from "next/navigation";
import {Path} from "@/app/path";

export const AllProducts = (props: AllProductsInterfaceProps) => {
    const pathname = usePathname()

    return (
        <section>
            {props.products.length > 0 ?
                pathname === Path.PRODUCTS ?
                    <ul>
                        {props.categories.map((category: string, index) => {
                            return (
                                <section key={index} className={main_scss.category_section}>
                                    <header className={'no_important ' + main_scss.category_name}>{category}</header>
                                    <ul className={main_scss.products}>
                                        {props.products.filter(product => product.category === category)
                                            .map((oneProduct: OneProductInterface) => {
                                                return (
                                                    <li key={oneProduct.id}>
                                                        <OneProductMainContainer oneProduct={oneProduct}/>
                                                    </li>
                                                )
                                            })}
                                    </ul>
                                </section>
                            )
                        })}
                    </ul>
                    :
                    <ul className={main_scss.products}>
                        {props.products.map((oneProduct: OneProductInterface) => {
                                return (
                                    <li key={oneProduct.id}>
                                        <OneProductMainContainer oneProduct={oneProduct}/>
                                    </li>
                                )
                            })}
                    </ul>
                :
                <div className={'no_important ' + main_scss.category_name + ' ' + main_scss.noProducts}>Нет
                    товаров</div>
            }
        </section>


    )
}