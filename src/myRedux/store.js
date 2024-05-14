import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { eventsReducer } from './eventsSlise';

const rootReducer = combineReducers({
  events: eventsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
