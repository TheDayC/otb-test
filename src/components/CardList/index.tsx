import { useSelector } from 'react-redux';
import selector from './selector';

const CardList: React.FC = () => {
    const { hotels } = useSelector(selector);

    if (hotels.length === 0) return <p>No hotels found.</p>;

    return (
        <div className="flex flex-col w-full">
            {/* hotels.map(hotel => (

            )) */}
        </div>
    );
};

export default CardList;
