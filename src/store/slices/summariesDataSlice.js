import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../constans";

export const fetchSummariesData = createAsyncThunk(
   'summaries/fetchSummariesData',
   async function ({ searchQuery = '', filterCity = '' }, { rejectWithValue }) {
      try {
         const response = await axios.get(`${API_URL}?q=${searchQuery}${filterCity !== '' ? `&work_city=${filterCity}` : ''}`)
         const summaries = await response.data
         return summaries;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
)

const initialState = {
   summariesData: [],
   loadingProgress: false,
   errorFetch: null,
   currentItems: null,
}

const summariesDataSlice = createSlice({
   name: 'summaries',
   initialState,
   reducers: {
      setModifiedData(state, action) {
         state.summariesData = action.payload;
      },
      setCurrentItems(state, action) {
         state.currentItems = action.payload;
      }
   },
   extraReducers: {
      [fetchSummariesData.pending]: (state, action) => {
         state.loadingProgress = true;
      },
      [fetchSummariesData.fulfilled]: (state, action) => {
         state.loadingProgress = false;
         state.summariesData = action.payload;
      },
      [fetchSummariesData.rejected]: (state, action) => {
         state.loadingProgress = false;
         state.errorFetch = action.payload;
      },
   }
});

export const { setModifiedData, setCurrentItems } = summariesDataSlice.actions;

export default summariesDataSlice.reducer;