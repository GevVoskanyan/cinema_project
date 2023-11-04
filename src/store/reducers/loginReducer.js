import { createReducer } from "@reduxjs/toolkit";
import { loginAction } from "../actions/loginAction";

const initialState = {
  loginStatus: "",
  user: {},
  token: ""
};

const loginReducer = createReducer(initialState, (builder) => {
  builder.addCase(loginAction.pending, (state, action) => {
    state.loginStatus = "pending";
  });
  builder.addCase(loginAction.fulfilled, (state, action) => {
    console.log("reducer-action", action);
    state.loginStatus = "fulfilled";
  });
  builder.addCase(loginAction.rejected, (state, action) => {
    state.loginStatus = "rejected";
  });
});

export default loginReducer;
