'use client';

import { Fragment } from 'react';
import { HotelOrder } from '@/enums/hotels';
import OrderButton from './OrderButton';

const Sidebar: React.FC = () => (
    <Fragment>
        <OrderButton type={HotelOrder.Alphabetical} />
        <OrderButton type={HotelOrder.Price} />
        <OrderButton type={HotelOrder.Rating} />
    </Fragment>
);
export default Sidebar;
