import { selectHotelState } from '@/redux/slice/hotels';
import { createSelector } from '@reduxjs/toolkit';

const selector = createSelector([selectHotelState], (hotels) => ({
    hotels: hotels.data,
    order: hotels.order,
}));

export default selector;
