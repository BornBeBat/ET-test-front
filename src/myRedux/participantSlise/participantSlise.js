import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getEventById, registerParticipant } from './operations';

const initialState = {
  title: '',
  participants: [],
  isLoading: false,
  error: false,
};

export const participantSlise = createSlice({
  name: 'participants',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerParticipant.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(getEventById.fulfilled, (state, { payload }) => {
        state.title = payload.title;
        state.participants = payload.participants;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(registerParticipant.pending, getEventById.pending), state => {
        state.isLoading = true;
        state.error = false;
      })
      .addMatcher(isAnyOf(registerParticipant.rejected, getEventById.rejected), state => {
        state.isLoading = false;
        state.error = true;
      });
  },
  selectors: {
    selectParticipants: state => state.participants,
    selectTitle: state => state.title,
    selectIsLoadingParticipant: state => state.isLoading,
    selectErrorParticipant: state => state.error,
  },
});

export const participantReducer = participantSlise.reducer;

export const {
  selectParticipants,
  selectIsLoadingParticipant,
  selectErrorParticipant,
  selectTitle,
} = participantSlise.selectors;
