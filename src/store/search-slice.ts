import { createSlice } from '@reduxjs/toolkit';

const initialSearchState: {
  films: {
    url: string;
    title: string;
    episode_id: number;
    release_date: string;
    director: string;
    producer: string;
  }[];
} = {
  films: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    clearFilms(state) {
      state.films = [];
    },
    addFilm(state, action) {
      const newFilm = action.payload;
      const existingFilm = state.films.find(
        (film) => film?.url === newFilm.url
      );
      if (!existingFilm) {
        state.films.push({
          url: newFilm.url,
          title: newFilm.title,
          episode_id: newFilm.episode_id,
          release_date: newFilm.release_date,
          director: newFilm.director,
          producer: newFilm.producer,
        });
      }
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
