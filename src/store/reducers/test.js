import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  test: 'TEST',
};

const test = createReducer(initialState, (builder) => {});

export default test;
