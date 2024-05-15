import { createAsyncThunk } from '@reduxjs/toolkit';
import { eventApi, participantApi } from '../../api';

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

export const getEventById = createAsyncThunk('participant/getEventById', async (id, thunkAPI) => {
  try {
    const response = await eventApi.getEventById(id);
    return response.result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
