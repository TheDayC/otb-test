import { combineReducers } from '@reduxjs/toolkit';
import hotelReducer from './slice/hotels';

const rootReducer = combineReducers({
    [hotelReducer.name]: hotelReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
