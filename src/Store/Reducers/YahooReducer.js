import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {YAHOO_URL} from '../../App/api';
import {
  getDataByBodyParams,
} from '../../App/fetch';

const initialState = {
  yahooData: [],
  error: '',
  status: '', 
};



export const YahooData = createAsyncThunk('get-trending-tickers', async body => {
  const result = await getDataByBodyParams(`${YAHOO_URL}/get-trending-tickers`,body);
  return result;
});

const YahooReducer = createSlice({
  name: 'NewReducer',
  initialState,
  reducers: {
    YahooDataFromAsyncStorage: (state, action) => {
      state.yahooData = action.payload;
    },
  },
  extraReducers: {
    [YahooData.pending]: (state, action) => {
      state.status = 'Pending';
    },
    [YahooData.rejected]: (state, action) => {
      state.status = 'Error';
      state.error = action.payload;
    },
    [YahooData.fulfilled]: (state, action) => {
      if (action.payload) {
        state.yahooData = action.payload
        state.status = 'Ok';
        state.error = 'none';
      }
    },
  },
});

export default YahooReducer.reducer;
export const {YahooDataFromAsyncStorage} =
YahooReducer.actions;
