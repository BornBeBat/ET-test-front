import { createAsyncThunk } from '@reduxjs/toolkit';
import { participantApi } from '../../api';

export const registerParticipant = createAsyncThunk(
  'participant/registerParticipant',
  async (data, thunkAPI) => {
    try {
      const response = await participantApi.registerParticipant(data);
      return response.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
