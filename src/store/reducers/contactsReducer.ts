import {ContactsInterface} from "@/app/interfaces/footerInterface";

interface contactInterface {
    appName: string,
    pointsApp: string[],
    contacts: number,
    rules: string,
    contactsArr: ContactsInterface[]
}

const initialValue: contactInterface = {
    appName: 'QPICK',
    pointsApp: ['Избранное', 'Корзина', 'Контакты', 'Условия сервиса'],
    contacts: 89005553535,
    rules: `Here is service's rules`,
    contactsArr: [
        {
            img: '/assets/icons/vk.svg',
            link: 'https://vk.com/neoflex_ru'
        },
        {
            img: '/assets/icons/telegram.svg',
            link: 'https://t.me/neoflexcareers'
        },
        {
            img: '/assets/icons/whatsapp.svg',
            link: 'https://t.me/ddarumddarimdda'
        }
    ],
}

export const contactsReducer = (state = initialValue, action: any) => {
    const stateCopy = {...state}
    switch (action.type) {
        default: {
            return stateCopy
        }
    }
}