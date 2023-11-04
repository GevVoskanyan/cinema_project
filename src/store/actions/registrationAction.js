import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const registrationAction = createAsyncThunk("index/registration", async (payload, thunkAPI) => {
  const { data } = await Api.registration(payload);
  return data;
});

export const setData = {};
