import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { useEffect } from 'react';
import {BASE_URL} from '../../App/api';
import {
  getDataByBodyParams,
} from '../../App/fetch';

const initialState = {
  userData: [],
  error: '',
  status: '', 
};



export const UserData = createAsyncThunk('users', async body => {
  const result = await getDataByBodyParams(`${BASE_URL}/users`,body);
  return result;
});

const NewReducer = createSlice({
  name: 'NewReducer',
  initialState,
  reducers: {
    userInfoDataFromAsyncStorage: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: {
    [UserData.pending]: (state, action) => {
      state.status = 'Pending';
    },
    [UserData.rejected]: (state, action) => {
      state.status = 'Error';
      state.error = action.payload;
    },
    [UserData.fulfilled]: (state, action) => {
      if (action.payload) {
        state.userData = action.payload
        state.status = 'Ok';
        state.error = 'none';
      }
    },
  },
});

export default NewReducer.reducer;
export const {userInfoDataFromAsyncStorage} =
NewReducer.actions;
