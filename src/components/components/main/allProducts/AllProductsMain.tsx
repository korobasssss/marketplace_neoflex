import {Header} from "@/components/components/main/header/Header";
import {AllProductsInterfaceProps} from "@/components/interfaces/allProductsInterface";
import main_scss from './AllProductsMain.module.scss'

export const AllProductsMain = (props: AllProductsInterfaceProps) => {
    return (
        <section className={main_scss.route}>
            <main className={main_scss.page}>
                <Header/>
            </main>

        </section>
    )
}