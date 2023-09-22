import { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import selector from './selector';
import Card from '../Card';

const CardList: FC = () => {
    const { hotels } = useSelector(selector);

    if (hotels.length === 0) return <p>No hotels found.</p>;

    return (
        <Fragment>
            {hotels.map((hotel, i) => (
                <Card {...hotel} key={`card-${i}`} />
            ))}
        </Fragment>
    );
};

export default CardList;
