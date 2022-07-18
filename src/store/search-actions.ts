import { SEARCHTYPE } from '../core/constants';
import { FilmDataSource } from '../data/datasources/FilmDataSource';
import { FilmListDataSource } from '../data/datasources/FilmListDataSource';
import { searchActions } from './search-slice';

export const fetchSearchData = (terms: string) => {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    const termsArray = terms.split(' ');
    let totalFilmsFetched: string[] = [];

    dispatch(searchActions.clearFilms());

    const filmsFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.FILMS,
      termsArray,
      totalFilmsFetched
    );
    totalFilmsFetched = filmsFilms;

    const planetFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.PLANETS,
      termsArray,
      totalFilmsFetched
    );
    totalFilmsFetched = planetFilms;

    const peopleFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.PEOPLE,
      termsArray,
      totalFilmsFetched
    );
    totalFilmsFetched = peopleFilms;

    const starshipsFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.STARSHIPS,
      termsArray,
      peopleFilms
    );
    totalFilmsFetched = starshipsFilms;

    const vehiclesFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.VEHICLES,
      termsArray,
      starshipsFilms
    );
    totalFilmsFetched = vehiclesFilms;

    const speciesFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.SPECIES,
      termsArray,
      vehiclesFilms
    );
    totalFilmsFetched = speciesFilms;

    let uniqueFilms: string[] = [];

    totalFilmsFetched.forEach((url: string) => {
      const existingUrl = uniqueFilms.find((item?) => item === url) || '';
      if (existingUrl === '') {
        uniqueFilms = [...uniqueFilms, url];
      }
    });
    uniqueFilms.sort();

    let filmsMapped: string[] = [];

    for (let film of uniqueFilms) {
      if (!filmsMapped.includes(film)) {
        const filmData = await FilmDataSource.fetchFilmData(film);
        filmsMapped.push(film);
        dispatch(
          searchActions.addFilm({
            url: filmData.url,
            title: filmData.title,
            episode_id: filmData.episode_id,
            release_date: filmData.release_date,
            director: filmData.director,
            producer: filmData.producer,
          })
        );
      }
    }
  };
};

export const fetchFilmData = (url: string) => {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {};
};
