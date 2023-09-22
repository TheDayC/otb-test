import { HotelOrder } from '@/enums/hotels';
import { DateTime } from 'luxon';

const initialHotelsState = {
    data: [
        {
            name: 'Iberostar grand Salome',
            location: 'Costa Adeje, Tenerife',
            rating: 5,
            guests: {
                adults: 2,
                children: 2,
                infants: 1,
            },
            arrivalDate: DateTime.fromSeconds(1562108400).toISODate() || '',
            durationInDays: 7,
            departureLocation: 'East Midlands',
            costInPennies: 113650,
            description: `The Iberostar grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.`,
            image: 'hotel-image-1.png',
        },
        {
            name: 'Aguamarina Golf Hotel',
            location: 'Costa Adeje, Tenerife',
            rating: 4,
            guests: {
                adults: 2,
                children: 1,
                infants: 0,
            },
            arrivalDate: DateTime.fromSeconds(1558911600).toISODate() || '',
            durationInDays: 7,
            departureLocation: 'Liverpool',
            costInPennies: 69680,
            description: `The Aguamarina Golf Hotel has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.`,
            image: 'hotel-image-2.png',
        },
        {
            name: 'Las Piramides Resort',
            location: 'Costa Adeje, Tenerife',
            rating: 3,
            guests: {
                adults: 2,
                children: 2,
                infants: 0,
            },
            arrivalDate: DateTime.fromSeconds(1562108400).toISODate() || '',
            durationInDays: 7,
            departureLocation: 'Manchester',
            costInPennies: 49999,
            description: `The Aguamarina Golf Hotel has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.`,
            image: 'hotel-image-3.png',
        },
    ],
    order: HotelOrder.Alphabetical,
};

export default initialHotelsState;
