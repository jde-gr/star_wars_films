// import { uiActions } from './ui-slice';
import { searchActions } from './search-slice';
// import {
//   NOTIFICATIONSTATUS,
//   SENDNOTIFICATIONTITLE,
//   SENDNOTIFICATIONMSG,
//   FETCHNOTIFICATIONTITLE,
//   FETCHNOTIFICATIONMSG,
// } from '../components/UI/Notification';
import { baseUrl, ERRORMESSAGE } from '../core/constants';

export const fetchSearchData = (terms: string) => {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    const termsArray = terms.split(' ');
    console.log(`termsArray: ${termsArray}`);
    let totalFilmsFetched: string[] = [];

    const fetchFilmsHandler = async (searchType: string) => {
      // termsArray.forEach(async (term) => {
      for (let term of termsArray) {
        try {
          const response = await fetch(
            `${baseUrl}/${searchType}/?search=${term}`
          );
          if (!response.ok) {
            console.log('!response.ok');
            throw new Error(ERRORMESSAGE.fetchSearchDataError);
          }

          const data = await response.json();

          console.log(
            `fetch${searchType}Handler | termsArray length: ${termsArray.length} | termsArray: ${termsArray} | term: ${term}`
          );
          console.log(
            `data films: ${
              searchType === 'films'
                ? JSON.stringify(data.results[0].url)
                : JSON.stringify(data.results[0].films)
            }`
          );

          const transformedMovies = JSON.parse(
            JSON.stringify(
              searchType === 'films'
                ? data.results[0].url
                : data.results[0].films
            )
          );
          console.log(
            `transformedMovies: ${transformedMovies} | length: ${transformedMovies.length}`
          );

          if (searchType === 'films') {
            totalFilmsFetched.push(transformedMovies);
          } else {
            transformedMovies.forEach((movie: any) => {
              console.log(movie);
              totalFilmsFetched.push(movie);
            });
          }

          console.log(
            `transformed${searchType}Movies: ${
              transformedMovies || []
            } | length: ${transformedMovies.length}`
          );

          console.log(
            `totalFilmsFetched: ${totalFilmsFetched} | length: ${totalFilmsFetched.length}`
          );
        } catch (error) {
          /* console.log('catch(error)');
        // setError(error.message);
        throw new Error(ERRORMESSAGE.fetchSearchDataError); */
        }
      }
      return totalFilmsFetched;
    };

    const filmsFilms = await fetchFilmsHandler('films');
    console.log(
      `fetchFilmsHandler('films') > peopleFilms: ${filmsFilms} | length: ${filmsFilms?.length}`
    );

    const planetFilms = await fetchFilmsHandler('planets');
    console.log(
      `fetchFilmsHandler('planets') > planetFilms: ${planetFilms} | length: ${planetFilms?.length}`
    );

    const peopleFilms = await fetchFilmsHandler('people');
    console.log(
      `fetchFilmsHandler('people') > peopleFilms: ${peopleFilms} | length: ${peopleFilms?.length}`
    );

    const starshipsFilms = await fetchFilmsHandler('starships');
    console.log(
      `fetchFilmsHandler('starships') > starshipsFilms: ${starshipsFilms} | length: ${starshipsFilms?.length}`
    );

    const vehiclesFilms = await fetchFilmsHandler('vehicles');
    console.log(
      `fetchFilmsHandler('vehicles') > vehiclesFilms: ${vehiclesFilms} | length: ${vehiclesFilms?.length}`
    );

    const speciesFilms = await fetchFilmsHandler('species');
    console.log(
      `fetchFilmsHandler('species') > speciesFilms: ${speciesFilms} | length: ${speciesFilms?.length}`
    );

    let uniqueFilms: string[] = [];

    filmsFilms.forEach((url) => {
      const existingUrl = uniqueFilms.find((item?) => item === url) || '';
      console.log(`existingUrl: ${existingUrl}`);
      if (existingUrl === '') {
        uniqueFilms = [...uniqueFilms, url];
      }
    });
    console.log(`uniqueFilms: ${uniqueFilms} | length: ${uniqueFilms?.length}`);

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
