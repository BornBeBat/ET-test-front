import { createAsyncThunk } from '@reduxjs/toolkit';
import { eventApi } from '../../api';

export const fetchEvents = createAsyncThunk('users/fetchByIdStatus', async (params, thunkAPI) => {
  try {
    const response = await eventApi.getEvents(params);
    return response.result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
