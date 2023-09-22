'use client';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { HotelOrder } from '@/enums/hotels';
import selector from './selector';
import { orderButtonText } from '@/utils/sort';

interface OrderButtonProps {
    type: HotelOrder;
}

const OrderButton: FC<OrderButtonProps> = ({ type }) => {
    const { order } = useSelector(selector);
    const title = orderButtonText(type);

    return (
        <div className="flex flex-row w-full">
            <button>{title}</button>
        </div>
    );
};

export default OrderButton;
