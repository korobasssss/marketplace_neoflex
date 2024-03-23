import {AllProductsInterfaceProps} from "@/app/interfaces/allProductsInterface";
import {OneProductInterface} from "@/app/interfaces/oneProductInterface";

import main_scss from '@/app/scss/components/main/AllProductsMain.module.scss'
import {OneProductMainContainer} from "@/app/components/allProducts/oneProductInMain/OneProductMainContainer";

export const AllProducts = (props: AllProductsInterfaceProps) => {
    return (
        <ul className={main_scss.products}>
            {props.products.map((oneProduct: OneProductInterface) => {
                return (
                    <li key={oneProduct.id}>
                        <OneProductMainContainer oneProduct={oneProduct}/>
                    </li>
                )
            })}
        </ul>

    )
}