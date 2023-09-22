'use client';
import { FC } from 'react';
import { HotelOrder } from '@/enums/hotels';
import { BsSortAlphaDown } from 'react-icons/bs';
import { AiFillStar, AiOutlinePoundCircle } from 'react-icons/ai';

interface IconProps {
    type: HotelOrder;
}

const Icon: FC<IconProps> = ({ type }) => {
    switch (type) {
        case HotelOrder.Alphabetical:
            return <BsSortAlphaDown className="w-6 h-6" />;
        case HotelOrder.Price:
            return <AiOutlinePoundCircle className="w-6 h-6" />;
        case HotelOrder.Rating:
            return <AiFillStar className="w-6 h-6" />;
    }
};

export default Icon;
