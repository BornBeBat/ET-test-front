import { configureStore } from '@reduxjs/toolkit';

import { eventsReducer } from './eventsSlise';

export const store = configureStore({
  reducer: {
    eventsReducer,
  },
});
