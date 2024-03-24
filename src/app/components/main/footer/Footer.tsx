import '@/app/scss/globals/globals.scss'
import {ContactsInterface, FooterInterfaceProps} from "@/app/interfaces/footerInterface";

import footer_scss from '@/app/scss/components/main/Footer.module.scss'
import Image from "next/image";

export const Footer = (props: FooterInterfaceProps) => {
    return (
        <section className={footer_scss.page}>
            <main className={footer_scss.root + ' round_section'}>
                <div className={'title'}>{props.appName}</div>
                <ul className={footer_scss.pointsArr}>
                    {props.pointsApp.map((point: string, index) => {
                        return (
                            <li key={index}>
                                <button>{point}</button>
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