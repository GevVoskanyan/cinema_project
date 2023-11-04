import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Api";

export const loginAction = createAsyncThunk("index/registration", async (payload, thunkAPI) => {
  try {
    const { data } = await Api.login(payload);

    return data;
  } catch (e) {
    thunkAPI.rejectWithValue(e);
  }
});

export const setData = {};
