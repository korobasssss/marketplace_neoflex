import {AllProductsInterfaceProps} from "@/app/interfaces/allProductsInterface";
import {OneProductInterface} from "@/app/interfaces/oneProductInterface";

import main_scss from '@/app/scss/components/main/AllProductsMain.module.scss'
import {OneProductMainContainer} from "@/app/components/allProducts/oneProductInMain/OneProductMainContainer";
import '@/app/scss/globals/globals.scss'
import {usePathname} from "next/navigation";
import {Main_path} from "@/app/path";
import Cookies from 'js-cookie'

export const AllProducts = (props: AllProductsInterfaceProps) => {
    const pathname = usePathname()
    const pathnameArr = pathname.split('/')
    const thirdPath = pathnameArr[2]
    const lastPath = pathnameArr[pathnameArr.length - 1]


    return (
        <section>
            {props.products.length > 0 ?
                thirdPath === Main_path.PRODUCTS ?
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
                                                        <OneProductMainContainer oneProduct={oneProduct}
                                                                                 flag={true}/>
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
                        {props.products.map((oneProduct: OneProductInterface, index) => {
                            return (
                                <li key={oneProduct.id}>
                                    <OneProductMainContainer oneProduct={oneProduct}
                                                             flag={true}/>
                                </li>
                            )
                        })}
                    </ul>
                :
                <div className={'no_important ' + main_scss.category_name + ' ' + main_scss.noProducts}>Нет
                    товаров</div>
            }
            {lastPath === Cookies.get('id') ?
                props.products.map((oneProduct: OneProductInterface, index) => {
                    if (oneProduct.id.toString() === Cookies.get('id')) {
                        return (
                            <OneProductMainContainer key={oneProduct.id}
                                                     oneProduct={props.products[index]}
                                                     flag={false}/>
                        )
                    }
                })

                : null}
        </section>

    )
}