import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import hotelReducer from './slice/hotels';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const rootReducer = combineReducers({
    hotels: hotelReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
};

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
