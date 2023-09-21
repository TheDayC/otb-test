import { createAction, createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';
import initialHotelsState from '../state/hotels';

const hydrate = createAction<AppState>(HYDRATE);

export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState: initialHotelsState,
    reducers: {
        setHotelDataState(state, action) {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(hydrate, (state, action) => ({
            ...state,
            ...action.payload[hotelsSlice.name],
        }));
    },
});

export const { setHotelDataState } = hotelsSlice.actions;

export const selectHotelState = (state: AppState) => state.hotels.data;

export default hotelsSlice.reducer;
