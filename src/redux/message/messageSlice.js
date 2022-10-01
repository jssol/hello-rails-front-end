import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

export const fetchMessage = createAsyncThunk('message/fetchMessage', async () => {
  const response = await axios.get(`${BASE_URL}random_message`);
  return response.data;
});

const messageSlice = createSlice({
  name: 'fetchMessage',
  initialState,
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(fetchMessage.pending, (state) => {
      state.loading = true;
      state.message = {};
      state.error = "";
    });
    builder.addCase(fetchMessage.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = "";
    });
    builder.addCase(fetchMessage.rejected, (state, action) => {
      state.loading = false;
      state.message = {};
      state.error = action.error.message;
    });
  },
  /* eslint-enable */
});

export default messageSlice.reducer;
