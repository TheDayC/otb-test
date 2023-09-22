import { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import selector from './selector';
import Card from '../Card';
import { HotelOrder } from '@/enums/hotels';
import { orderAlphbetically, orderByPrice, orderByRating } from '@/utils/sort';

const CardList: FC = () => {
    const { hotels, order } = useSelector(selector);

    if (hotels.length === 0) return <p>No hotels found.</p>;

    return (
        <Fragment>
            {[...hotels]
                .sort((a, b) => {
                    if (order === HotelOrder.Price) {
                        return orderByPrice(a.costInPennies, b.costInPennies);
                    }

                    if (order === HotelOrder.Rating) {
                        return orderByRating(a.rating, b.rating);
                    }

                    return orderAlphbetically(a.name, b.name);
                })
                .map((hotel, i) => (
                    <Card {...hotel} key={`card-${i}`} />
                ))}
        </Fragment>
    );
};

export default CardList;
