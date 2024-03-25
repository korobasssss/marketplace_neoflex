import '@/app/scss/globals/globals.scss'
import {ContactsInterface, FooterInterfaceProps, FooterVarious} from "@/app/interfaces/footerInterface";

import footer_scss from '@/app/scss/components/main/Footer.module.scss'
import Image from "next/image";
import {Path} from "@/app/path";

export const Footer = (props: FooterInterfaceProps) => {
    return (
        <section className={footer_scss.page}>
            <main className={footer_scss.root + ' round_section'}>
                <a className={'title'} href={Path.PRODUCTS}>{props.appName}</a>
                <ul className={footer_scss.pointsArr}>
                    {props.pointsArr.map((point: FooterVarious, index) => {
                        return (
                            <li key={index}>
                                <a href={point.router}>{point.name}</a>
                            </li>
                        )
                    })}
                </ul>
                <ul className={footer_scss.contactsArr}>
                    {props.contactsArr.map((oneLink: ContactsInterface, index) => {
                        return (
                            <li key={index}>
                                <a href={oneLink.link} target="_blank">
                                    <Image src={oneLink.img} className={footer_scss.img} alt={'link'}
                                           width={0} height={0}/>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </section>


    )
}