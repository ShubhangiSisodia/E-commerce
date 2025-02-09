import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  sortBy: 'price',
  filterCategory: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    },
  },
});

export const { setQuery, setSortBy, setFilterCategory } = searchSlice.actions;
export default searchSlice.reducer;
