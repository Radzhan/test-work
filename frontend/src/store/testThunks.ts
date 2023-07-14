import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import { Contributions } from "../types";

export const getObject = createAsyncThunk<Contributions>('test/getObject', async () => {
	const response = await axiosApi.get('test');

	return response.data;
});
