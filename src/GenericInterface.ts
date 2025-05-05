{
    // interface ==> generic

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        };
        smartPhone: T;
        bike?: X
    }

    interface SamsungPhone {
        name: string;
        model: string;
        display: string
    }

    const developer1: Developer<SamsungPhone> = {
        name: 'Hasib',
        computer: {
            brand: 'Lenovo',
            model: 'S-145',
            releaseYear: 2018
        },
        smartPhone: {
            name: 'Samsung',
            model: 'F-22',
            display: 'Amoled'
        }
    }

    interface OppoPhone {
        name: string;
        model:string;
        superFastCharging: boolean
    }

    interface bike {
        name: string;
        model: string
    }

    const developer2: Developer<OppoPhone, bike> = {
        name: 'Prangon',
        computer: {
            brand: 'Asus',
            model: 'UX-31e',
            releaseYear: 2011
        },
        smartPhone: {
            name: 'Oppo',
            model: 'F-15pro',
            superFastCharging: false
        },
        bike: {
            name: 'Yamaha',
            model: 'Mt-15'
        }
    }

    //
}