import { createSlice } from '@reduxjs/toolkit';

const shortUrlsSlice = createSlice({
  name: 'shorturls',
  initialState: {
    urls: [],
  },
  reducers: {
    setUrls: (state, data) => {
      state.urls = data.payload.urls;
    },
  },
});

const shortUrlActions = shortUrlsSlice.actions;
let shortUrlReducer = shortUrlsSlice.reducer;
export { shortUrlActions, shortUrlReducer };
