import { createSlice } from '@reduxjs/toolkit';
import { fetchEvents } from './operations';

const initialState = {
  events: [],
};

export const eventsSlise = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchEvents.fulfilled, (state, { payload }) => {
      state.events = payload;
    });
  },
  selectors: {},
});

export const eventsReducer = eventsSlise.reducer;
