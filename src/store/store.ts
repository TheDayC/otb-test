import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { hotelSlice } from './slice/hotels';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
    configureStore({
        reducer: {
            [hotelSlice.name]: hotelSlice.reducer,
        },
        devTools: true,
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
