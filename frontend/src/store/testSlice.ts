import { createSlice } from "@reduxjs/toolkit";

interface testState {}

const initialState: testState = {};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const testReducer = testSlice.reducer;
