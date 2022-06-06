import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from './Reducers/AuthReducer';
import NewReducer from './Reducers/NewReducer';
import YahooReducer from './Reducers/YahooReducer';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    new:NewReducer,
    yahoo : YahooReducer
  },
});
