import { ERRORMESSAGE } from '../../core/constants';

export const FilmDataSource = {
  getFilmData: (url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => data.filmData);
  },
  fetchFilmData: async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(ERRORMESSAGE.fetchSearchDataError);
      }

      const data = await response.json();

      const movieData = JSON.parse(JSON.stringify(data));

      return movieData;
    } catch (error) {
      //show notification
    }
  },
};
