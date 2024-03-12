const initialValue = {
    products: [
        {
            img: '@/assets/productsImage/apple_BYZ_SB251.svg',
            title: 'Apple BYZ S852I',
            price: 2927,
            rate: 4.7
        },
        {
            img: '@/assets/productsImage/apple_earpods.svg',
            title: 'Apple EarPods',
            price: 2327,
            rate: 4.5
        },
        {
            img: '@/assets/productsImage/apple_earpods2.svg',
            title: 'Apple EarPods',
            price: 2327,
            rate: 4.5
        },
        {
            img: '@/assets/productsImage/apple_BYZ_SB251.svg',
            title: 'Apple BYZ S852I',
            price: 2927,
            rate: 4.7
        },
        {
            img: '@/assets/productsImage/apple_earpods.svg',
            title: 'Apple EarPods',
            price: 2327,
            rate: 4.5
        },
        {
            img: '@/assets/productsImage/apple_earpods2.svg',
            title: 'Apple EarPods',
            price: 2327,
            rate: 4.5
        },
        {
            img: '@/assets/productsImage/apple_earpods.svg',
            title: 'Apple AirPods',
            price: 9527,
            rate: 4.7
        },
        {
            img: '@/assets/productsImage/apple_earpods.svg',
            title: 'GERLAX GH-04',
            price: 6527,
            rate: 4.7
        },
        {
            img: '@/assets/productsImage/apple_earpods.svg',
            title: 'BOROFONE BO4',
            price: 7527,
            rate: 4.7
        },
    ]
}

export const productsReducer = (state = initialValue, action: any) => {
    const stateCopy = {...state}
    switch (action.type) {
        default: {
            return stateCopy
        }
    }
}