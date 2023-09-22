'use client';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store';
import initialHotelsState from '../state/hotels';

export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState: initialHotelsState,
    reducers: {
        setHotelDataState(state, action) {
            state.data = action.payload;
        },
    },
});

export const { setHotelDataState } = hotelsSlice.actions;

export const selectHotelState = (state: AppState) => state.hotels;

export default hotelsSlice.reducer;
