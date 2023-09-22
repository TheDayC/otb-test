'use client';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HotelOrder } from '@/enums/hotels';
import { orderButtonText } from '@/utils/sort';
import { setHotelOrder } from '@/redux/slice/hotels';
import selector from './selector';
import { BsSortAlphaDown } from 'react-icons/bs';
import Icon from './icon';

interface OrderButtonProps {
    type: HotelOrder;
}

const OrderButton: FC<OrderButtonProps> = ({ type }) => {
    const { order } = useSelector(selector);
    const title = orderButtonText(type);
    const dipsatch = useDispatch();
    const isSelected = order === type;
    const bgColor = isSelected ? 'blue-800' : 'white';
    const textColor = isSelected ? 'white' : 'blue-800';

    const handleClick = () => {
        dipsatch(setHotelOrder(type));
    };

    if (isSelected) {
        return (
            <button
                className="flex flex-row items-center justify-between w-full bg-blue-900 text-white p-2"
                onClick={handleClick}
            >
                {title} <Icon type={type} />
            </button>
        );
    }

    return (
        <button
            className="flex flex-row items-center justify-between w-full bg-white text-blue-900 p-2"
            onClick={handleClick}
        >
            {title} <Icon type={type} />
        </button>
    );
};

export default OrderButton;
