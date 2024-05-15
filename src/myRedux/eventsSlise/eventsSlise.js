import { createSlice } from '@reduxjs/toolkit';
import { fetchEvents } from './operations';

const initialState = {
  page: 1,
  firstLoad: false,
  filter: {},
  events: [],
  isLoading: false,
  error: false,
};

export const eventsSlise = createSlice({
  name: 'events',
  initialState,
  reducers: {
    updateFilter: (state, { payload }) => {
      state.filter = payload;
      state.page = 1;
      state.error = false;
      state.events = [];
    },
    updateFirstLoad: state => {
      state.firstLoad = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEvents.fulfilled, (state, { payload }) => {
        state.events.push(...payload);
        state.page = state.page + 1;
        state.isLoading = false;
      })
      .addCase(fetchEvents.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchEvents.rejected, state => {
        state.isLoading = false;
        state.error = true;
      });
  },
  selectors: {
    selectEvents: state => state.events,
    selectPage: state => state.page,
    selectError: state => state.error,
    selectFilter: state => state.filter,
    selectFirstLoad: state => state.firstLoad,
    selectEventsIsLoading: state => state.isLoading,
  },
});

export const eventsReducer = eventsSlise.reducer;

export const {
  selectEvents,
  selectPage,
  selectError,
  selectFilter,
  selectFirstLoad,
  selectEventsIsLoading,
} = eventsSlise.selectors;

export const { updateFilter, updateFirstLoad } = eventsSlise.actions;
