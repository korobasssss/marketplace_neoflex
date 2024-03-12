import {ContactsInterface, FooterInterfaceProps} from "@/components/interfaces/footerInterface";
import footer_scss from './Footer.module.scss'
import '@/app/globals.scss'
import Image from "next/image";

export const Footer = (props: FooterInterfaceProps) => {
    return (
        <main className={footer_scss.root}>
            <div className={'title'}>{props.appName}</div>
            <ul className={footer_scss.pointsArr}>
                {props.pointsApp.map((point: string) => {
                    return (
                        <li>
                            <button>{point}</button>
                        </li>
                    )
                })}
            </ul>
            <ul className={footer_scss.contactsArr}>
                {props.contactsArr.map((oneLink: ContactsInterface) => {
                   return (
                       <li>
                           <a href={oneLink.link} target="_blank">
                               <img src={oneLink.img} alt={'link'}/>
                           </a>
                       </li>
                   )
                })}
            </ul>
        </main>
    )
}