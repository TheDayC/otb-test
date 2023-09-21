import { configureStore, Action } from '@reduxjs/toolkit';
import { hotelsSlice } from './slice/hotels';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: {
        [hotelsSlice.name]: hotelsSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
