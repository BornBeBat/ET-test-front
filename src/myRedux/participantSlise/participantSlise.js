import { createSlice } from '@reduxjs/toolkit';
import { registerParticipant } from './operations';

const initialState = {
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
      .addCase(registerParticipant.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(registerParticipant.rejected, state => {
        state.isLoading = false;
        state.error = true;
      });
  },
  selectors: {
    selectParticipants: state => state.participants,
    selectIsLoadingParticipant: state => state.isLoading,
    selectErrorParticipant: state => state.error,
  },
});

export const participantReducer = participantSlise.reducer;

export const { selectParticipants, selectIsLoadingParticipant, selectErrorParticipant } =
  participantSlise.selectors;
