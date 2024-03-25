import {OneProductInterface} from "@/app/interfaces/oneProductInterface";

const initialValue: { products: OneProductInterface[], categories: string[]} = {
    products: [
        {
            id: 1,
            img: '/assets/productsImage/apple_BYZ_SB251.svg',
            title: 'Apple BYZ S852I',
            price: 2927,
            rate: 4.7,
            category: 'Наушники'
        },
        {
            id: 2,
            img: '/assets/productsImage/apple_earpods.svg',
            title: 'Apple EarPods',
            price: 2327,
            rate: 4.5,
            category: 'Наушники'
        },
        {
            id: 3,
            img: '/assets/productsImage/apple_earpods2.svg',
            title: 'Apple EarPods',
            price: 2327,
            rate: 4.5,
            category: 'Наушники'
        },
        {
            id: 4,
            img: '/assets/productsImage/apple_BYZ_SB251.svg',
            title: 'Apple BYZ S852I',
            price: 2927,
            rate: 4.7,
            category: 'Наушники'
        },
        {
            id: 5,
            img: '/assets/productsImage/apple_earpods.svg',
            title: 'Apple EarPods',
            price: 2327,
            rate: 4.5,
            category: 'Наушники'
        },
        {
            id: 6,
            img: '/assets/productsImage/apple_earpods2.svg',
            title: 'Apple EarPods',
            price: 2327,
            rate: 4.5,
            category: 'Наушники'
        },
        {
            id: 7,
            img: '/assets/productsImage/apple_airpods.svg',
            title: 'Apple AirPods',
            price: 9527,
            rate: 4.7,
            category: 'Беспроводные наушники'
        },
        {
            id: 8,
            img: '/assets/productsImage/GERLAX_CH-04.svg',
            title: 'GERLAX GH-04',
            price: 6527,
            rate: 4.7,
            category: 'Беспроводные наушники'
        },
        {
            id: 9,
            img: '/assets/productsImage/BOROFONE_BO4.svg',
            title: 'BOROFONE BO4',
            price: 7527,
            rate: 4.7,
            category: 'Беспроводные наушники'
        },
    ],
    categories: ['Наушники', 'Беспроводные наушники'],
}

export const productsReducer = (state = initialValue, action: any) => {
    const stateCopy = {...state}
    switch (action.type) {
        default: {
            return stateCopy
        }
    }
}