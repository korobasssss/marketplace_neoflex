import '@/app/scss/globals/globals.scss'
import {ContactsInterface, FooterInterfaceProps, FooterVarious} from "@/app/interfaces/footerInterface";

import footer_scss from '@/app/scss/components/main/Footer.module.scss'
import Image from "next/image";
import language_icon from '@/assets/icons/language.svg'

import {Path} from "@/app/path";
import {useState} from "react";
import {useRouter} from "next/navigation";

export const Footer = (props: FooterInterfaceProps) => {
    const router = useRouter()

    const [languageIndex, setLanguageIndex] = useState(0)

    return (
        <section className={footer_scss.page}>
            <main className={footer_scss.root + ' round_section'}>
                <button className={'title ' + footer_scss.header} onClick={() => router.push(Path.PRODUCTS)}>{props.appName}</button>
                <ul className={footer_scss.pointsArr}>
                    {props.pointsArr.map((point: FooterVarious, index) => {
                        return (
                            <li key={index} className={footer_scss.oneCategory}>
                                <button onClick={() => router.push(point.router)}>{point.name}</button>
                            </li>
                        )
                    })}
                </ul>
                <section className={footer_scss.language_section}>
                    <Image src={language_icon} alt={'language'}/>
                    <button className={languageIndex === 0 ? footer_scss.activeLanguage : undefined}
                            onClick={() => setLanguageIndex(0)}>
                        Рус
                    </button>
                    <button className={languageIndex === 1 ? footer_scss.activeLanguage : undefined}
                            onClick={() => setLanguageIndex(1)}>
                        Eng
                    </button>
                </section>
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