'use client';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store';
import initialHotelsState from '../state/hotels';

export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState: initialHotelsState,
    reducers: {
        setHotelOrder(state, action) {
            state.order = action.payload;
        },
    },
});

export const { setHotelOrder } = hotelsSlice.actions;

export const selectHotelState = (state: AppState) => state.hotels;

export default hotelsSlice.reducer;
