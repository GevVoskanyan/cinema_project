import { createReducer } from "@reduxjs/toolkit";
import { registrationAction } from "../actions/registrationAction";

const initialState = {
  registrationStatus: "",
  user: {},
  registrationToken: ""
};

const registrationReducer = createReducer(initialState, (builder) => {
  builder.addCase(registrationAction.pending, (state, action) => {
    state.registrationStatus = "pending";
  });
  builder.addCase(registrationAction.fulfilled, (state, action) => {
    state.registrationStatus = "fulfilled";
    state.user = action.payload.user;
    state.registrationToken = action.payload.token;
  });
  builder.addCase(registrationAction.rejected, (state, action) => {
    state.registrationStatus = "rejected";
  });
});

export default registrationReducer;
