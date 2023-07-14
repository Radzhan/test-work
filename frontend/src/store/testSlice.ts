import { createSlice } from "@reduxjs/toolkit";
import { Contributions } from "../types";
import { getObject } from "./testThunks";
import { RootState } from "../app/store";

interface testState {
	dayObject: Contributions;
}

const initialState: testState = {
	dayObject: {},
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
	builder.addCase(getObject.fulfilled, (state,action) => {
		state.dayObject = action.payload;
	});
  },
});

export const testReducer = testSlice.reducer;
export const objectContr = (state: RootState) => state.test.dayObject;

