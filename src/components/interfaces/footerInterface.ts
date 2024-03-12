export interface FooterInterfaceState {
    contacts: {
        appName: string
        contacts: number,
        rules: string,
        contactsArr: ContactsInterface[]
        pointsApp: string[]
    }


}

export interface FooterInterfaceProps {
    appName: string
    contacts: number,
    rules: string,
    contactsArr: ContactsInterface[]
    pointsApp: string[]
}

export interface ContactsInterface {
    img: string,
    link: string
}