import { configureStore, combineReducers } from '@reduxjs/toolkit';
import hotelReducer from './slice/hotels';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: {
        hotels: hotelReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
