'use client';

import { HotelOrder } from '@/enums/hotels';
import OrderButton from './OrderButton';

const Sidebar: React.FC = () => {
    return (
        <div className="flex flex-col w-full">
            <OrderButton type={HotelOrder.Alphabetical} />
            <OrderButton type={HotelOrder.Price} />
            <OrderButton type={HotelOrder.Rating} />
        </div>
    );
};

export default Sidebar;
