import { FC, useState } from 'react';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsArrowDownCircle, BsArrowRightCircle } from 'react-icons/bs';
import { DateTime } from 'luxon';

interface Guests {
    adults: number;
    children: number;
    infants: number;
}

interface CardProps {
    name: string;
    location: string;
    rating: number;
    guests: Guests;
    arrivalDate: string;
    durationInDays: number;
    departureLocation: string;
    costInPennies: number;
    description: string;
    image: string;
}

const Card: FC<CardProps> = ({
    name,
    location,
    rating,
    guests,
    arrivalDate,
    durationInDays,
    departureLocation,
    costInPennies,
    description,
    image,
}) => {
    const [isDescExpanded, setIsDescExpanded] = useState(false);
    const { adults, children, infants } = guests;
    const adultSuffix = adults === 1 ? 'Adult' : 'Adults';
    const childSuffix = children === 1 ? 'Child' : 'Children';
    const infantSuffix = infants === 1 ? 'Infant' : 'Infants';
    const descVisibility = isDescExpanded ? 'visible' : 'collapse';

    return (
        <div className="flex flex-col w-full bg-white max-w-3xl">
            <div className="flex flex-row w-full">
                <div className="relative">
                    <Image
                        src={`/${image}`}
                        alt={`Photo of ${name}`}
                        width={494}
                        height={277}
                        className="relative"
                    />

                    <div className="absolute bottom-0 left-0">
                        <button className="bg-white text-blue-900 text-base p-2 flex flex-row items-center gap-2">
                            Read {isDescExpanded ? 'less' : 'more'} about this hotel{' '}
                            {isDescExpanded ? <BsArrowDownCircle /> : <BsArrowRightCircle />}
                        </button>
                    </div>
                </div>
                <div className="flex flex-col text-gray-600 p-4 text-xs text-center flex-grow justify-between">
                    <h3 className="text-base text-blue-900 font-semibold">{name}</h3>
                    <h4 className="text-gray-400">{location}</h4>
                    <div className="flex flex-row justify-center">
                        {Array.from({ length: rating }).map(() => (
                            <AiFillStar className="text-yellow-300 w-4 h-4" key="star" />
                        ))}
                    </div>
                    <div className="flex flex-row gap-x-1 justify-center">
                        {adults > 0 && (
                            <p>
                                <b>{adults}</b> {adultSuffix}
                                {children > 0 && ','}
                            </p>
                        )}
                        {children > 0 && (
                            <p>
                                <b>{children}</b> {childSuffix}
                            </p>
                        )}
                        {infants > 0 && (
                            <p>
                                & <b>{infants}</b> {infantSuffix}
                            </p>
                        )}
                    </div>
                    <p>
                        <b>{DateTime.fromISO(arrivalDate).toFormat('d MMMM yyyy')}</b> for{' '}
                        <b>{durationInDays} days</b>
                    </p>
                    <p>
                        departing from <b>{departureLocation}</b>
                    </p>
                    <button className="bg-yellow-300 text-blue-900 rounded-sm p-2 mt-2 font-semibold">
                        <div className="flex flex-col">
                            <span className="text-xs">Book now</span>
                            <span className="text-lg">
                                &pound;
                                {(costInPennies / 100)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            </span>
                        </div>
                    </button>
                </div>
            </div>
            <div className={`${descVisibility} text-gray-500 text-sm p-4`}>
                <h3 className="text-blue-900 font-semibold mb-2">Overview</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
