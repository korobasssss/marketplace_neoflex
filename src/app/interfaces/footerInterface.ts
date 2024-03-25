export interface FooterInterfaceState {
    contacts: {
        appName: string
        contacts: number,
        rules: string,
        contactsArr: ContactsInterface[]
        pointsArr: FooterVarious[]
    }


}

export interface FooterInterfaceProps {
    appName: string
    contacts: number,
    contactsArr: ContactsInterface[]
    pointsArr: FooterVarious[]
}

export interface ContactsInterface {
    img: string,
    link: string
}

export interface FooterVarious {
    name: string,
    router: string
}