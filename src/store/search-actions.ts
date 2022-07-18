import { SEARCHTYPE } from '../core/constants';
import { FilmDataSource } from '../data/datasources/FilmDataSource';
import { FilmListDataSource } from '../data/datasources/FilmListDataSource';
import { searchActions } from './search-slice';

export const fetchSearchData = (terms: string) => {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    const termsArray = terms.split(' ');
    console.log(`termsArray: ${termsArray}`);
    let totalFilmsFetched: string[] = [];

    dispatch(searchActions.clearFilms());

    const filmsFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.FILMS,
      termsArray,
      totalFilmsFetched
    );
    totalFilmsFetched = filmsFilms;
    console.log(
      `fetchFilmsHandler('${SEARCHTYPE.FILMS}') > peopleFilms: ${filmsFilms} | length: ${filmsFilms?.length}`
    );

    const planetFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.PLANETS,
      termsArray,
      totalFilmsFetched
    );
    totalFilmsFetched = planetFilms;
    console.log(
      `fetchFilmsHandler('${SEARCHTYPE.PLANETS}') > planetFilms: ${planetFilms} | length: ${planetFilms?.length}`
    );

    const peopleFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.PEOPLE,
      termsArray,
      totalFilmsFetched
    );
    totalFilmsFetched = peopleFilms;
    console.log(
      `fetchFilmsHandler('${SEARCHTYPE.PEOPLE}') > peopleFilms: ${peopleFilms} | length: ${peopleFilms?.length}`
    );

    const starshipsFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.STARSHIPS,
      termsArray,
      peopleFilms
    );
    totalFilmsFetched = starshipsFilms;
    console.log(
      `fetchFilmsHandler('${SEARCHTYPE.STARSHIPS}') > starshipsFilms: ${starshipsFilms} | length: ${starshipsFilms?.length}`
    );

    const vehiclesFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.VEHICLES,
      termsArray,
      starshipsFilms
    );
    totalFilmsFetched = vehiclesFilms;
    console.log(
      `fetchFilmsHandler('${SEARCHTYPE.VEHICLES}') > vehiclesFilms: ${vehiclesFilms} | length: ${vehiclesFilms?.length}`
    );

    const speciesFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.SPECIES,
      termsArray,
      vehiclesFilms
    );
    totalFilmsFetched = speciesFilms;
    console.log(
      `fetchFilmsHandler('${SEARCHTYPE.SPECIES}') > speciesFilms: ${speciesFilms} | length: ${speciesFilms?.length}`
    );

    let uniqueFilms: string[] = [];

    totalFilmsFetched.forEach((url: string) => {
      const existingUrl = uniqueFilms.find((item?) => item === url) || '';
      console.log(`existingUrl: ${existingUrl}`);
      if (existingUrl === '') {
        uniqueFilms = [...uniqueFilms, url];
      }
    });
    uniqueFilms.sort();
    console.log(`uniqueFilms: ${uniqueFilms} | length: ${uniqueFilms?.length}`);

    let filmsMapped: string[] = [];

    for (let film of uniqueFilms) {
      if (!filmsMapped.includes(film)) {
        const filmData = await FilmDataSource.fetchFilmData(film);
        filmsMapped.push(film);
        console.log(`film: ${film} > data: ${JSON.stringify(filmData)}`);
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
