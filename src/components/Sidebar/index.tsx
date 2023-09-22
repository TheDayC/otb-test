'use client';

import { HotelOrder } from '@/enums/hotels';
import OrderButton from './OrderButton';
import { Fragment } from 'react';

const Sidebar: React.FC = () => {
    return (
        <Fragment>
            <OrderButton type={HotelOrder.Alphabetical} />
            <OrderButton type={HotelOrder.Price} />
            <OrderButton type={HotelOrder.Rating} />
        </Fragment>
    );
};

export default Sidebar;
