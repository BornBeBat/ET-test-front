import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { eventsReducer } from './eventsSlise';
import { participantReducer } from './participantSlise';

const rootReducer = combineReducers({
  events: eventsReducer,
  participant: participantReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
