// import { uiActions } from './ui-slice';
// import { searchActions } from './search-slice';
// import {
//   NOTIFICATIONSTATUS,
//   SENDNOTIFICATIONTITLE,
//   SENDNOTIFICATIONMSG,
//   FETCHNOTIFICATIONTITLE,
//   FETCHNOTIFICATIONMSG,
// } from '../components/UI/Notification';
import { SEARCHTYPE } from '../core/constants';
import { FilmDataSource } from '../data/datasources/FilmDataSource';
// import { baseUrl, ERRORMESSAGE } from '../core/constants';
import { FilmListDataSource } from '../data/datasources/FilmListDataSource';
import { searchActions } from './search-slice';

export const fetchSearchData = (terms: string) => {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    const termsArray = terms.split(' ');
    console.log(`termsArray: ${termsArray}`);
    let totalFilmsFetched: string[] = [];

    // const fetchFilmsHandler = async (searchType: string) => {
    //   // termsArray.forEach(async (term) => {
    //   for (let term of termsArray) {
    //     try {
    //       const response = await fetch(
    //         `${baseUrl}/${searchType}/?search=${term}`
    //       );
    //       if (!response.ok) {
    //         console.log('!response.ok');
    //         throw new Error(ERRORMESSAGE.fetchSearchDataError);
    //       }

    //       const data = await response.json();

    //       console.log(
    //         `fetch${searchType}Handler | termsArray length: ${termsArray.length} | termsArray: ${termsArray} | term: ${term}`
    //       );
    //       console.log(
    //         `data films: ${
    //           searchType === 'films'
    //             ? JSON.stringify(data.results[0].url)
    //             : JSON.stringify(data.results[0].films)
    //         }`
    //       );

    //       const transformedMovies = JSON.parse(
    //         JSON.stringify(
    //           searchType === 'films'
    //             ? data.results[0].url
    //             : data.results[0].films
    //         )
    //       );
    //       console.log(
    //         `transformedMovies: ${transformedMovies} | length: ${transformedMovies.length}`
    //       );

    //       if (searchType === 'films') {
    //         totalFilmsFetched.push(transformedMovies);
    //       } else {
    //         transformedMovies.forEach((movie: any) => {
    //           console.log(movie);
    //           totalFilmsFetched.push(movie);
    //         });
    //       }

    //       console.log(
    //         `transformed${searchType}Movies: ${
    //           transformedMovies || []
    //         } | length: ${transformedMovies.length}`
    //       );

    //       console.log(
    //         `totalFilmsFetched: ${totalFilmsFetched} | length: ${totalFilmsFetched.length}`
    //       );
    //     } catch (error) {
    //       /* console.log('catch(error)');
    //     // setError(error.message);
    //     throw new Error(ERRORMESSAGE.fetchSearchDataError); */
    //     }
    //   }
    //   return totalFilmsFetched;
    // };

    dispatch(searchActions.clearFilms());

    // const filmsFilms = await fetchFilmsHandler(SEARCHTYPE.FILMS);
    const filmsFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.FILMS,
      termsArray,
      totalFilmsFetched
    );
    totalFilmsFetched = filmsFilms;
    console.log(
      `fetchFilmsHandler('${SEARCHTYPE.FILMS}') > peopleFilms: ${filmsFilms} | length: ${filmsFilms?.length}`
    );

    // const planetFilms = await fetchFilmsHandler(SEARCHTYPE.PLANETS);
    const planetFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.PLANETS,
      termsArray,
      totalFilmsFetched
    );
    totalFilmsFetched = planetFilms;
    console.log(
      `fetchFilmsHandler('${SEARCHTYPE.PLANETS}') > planetFilms: ${planetFilms} | length: ${planetFilms?.length}`
    );

    // const peopleFilms = await fetchFilmsHandler(SEARCHTYPE.PEOPLE);
    const peopleFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.PEOPLE,
      termsArray,
      totalFilmsFetched
    );
    totalFilmsFetched = peopleFilms;
    console.log(
      `fetchFilmsHandler('${SEARCHTYPE.PEOPLE}') > peopleFilms: ${peopleFilms} | length: ${peopleFilms?.length}`
    );

    // const starshipsFilms = await fetchFilmsHandler(SEARCHTYPE.STARSHIPS);
    const starshipsFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.STARSHIPS,
      termsArray,
      peopleFilms
    );
    totalFilmsFetched = starshipsFilms;
    console.log(
      `fetchFilmsHandler('${SEARCHTYPE.STARSHIPS}') > starshipsFilms: ${starshipsFilms} | length: ${starshipsFilms?.length}`
    );

    // const vehiclesFilms = await fetchFilmsHandler(SEARCHTYPE.VEHICLES);
    const vehiclesFilms = await FilmListDataSource.fetchFilms(
      SEARCHTYPE.VEHICLES,
      termsArray,
      starshipsFilms
    );
    totalFilmsFetched = vehiclesFilms;
    console.log(
      `fetchFilmsHandler('${SEARCHTYPE.VEHICLES}') > vehiclesFilms: ${vehiclesFilms} | length: ${vehiclesFilms?.length}`
    );

    // const speciesFilms = await fetchFilmsHandler(SEARCHTYPE.SPECIES);
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

    /* try {
      // dispatch(
      //   searchActions.replaceFilms({
      //     films: searchData.films || [],
      //   })
      // );
    } catch (error) {
      //   dispatch(
      //     uiActions.showNotification({
      //       status: NOTIFICATIONSTATUS.error,
      //       title: FETCHNOTIFICATIONTITLE.error,
      //       message: FETCHNOTIFICATIONMSG.error,
      //     })
      //   );
    } */
  };
};

export const fetchFilmData = (url: string) => {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {};
};
