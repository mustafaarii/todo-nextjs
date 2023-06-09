import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { authReducer } from './reducers/AuthSlice';

const rootReducer = combineReducers({ authReducer })

export const store = configureStore({
  reducer: rootReducer,
});