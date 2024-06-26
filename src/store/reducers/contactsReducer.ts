import {ContactsInterface, FooterVarious} from "@/app/interfaces/footerInterface";
import {Path} from "@/app/path";

interface contactInterface {
    appName: string,
    pointsArr: FooterVarious[],
    contacts: number,
    rules: string,
    contactsArr: ContactsInterface[]
}

const initialValue: contactInterface = {
    appName: 'QPICK',
    pointsArr: [
        {
            name: 'Избранное',
            router: Path.FAVOURITES
        },
        {
            name: 'Условия сервиса',
            router: 'https://yandex.ru/legal/market_termsofuse'

        },
        {
            name: 'Корзина',
            router: Path.CART

        },
        {
            name: 'Контакты',
            router: 'tel:+1234567890'
        },
    ],
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