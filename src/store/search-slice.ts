import { createSlice } from '@reduxjs/toolkit';

const initialSearchState: {
  films: string[];
} = {
  films: [],
};

const searchSlice = createSlice({
  name: 'ui',
  initialState: initialSearchState,
  reducers: {
    replaceFilms(state) {
      // const newSearch = action.payload;
      // state.films = action.payload.films;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
