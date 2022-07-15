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
import { Url } from 'url';

export const fetchSearchData = (terms: string) => {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    const termsArray = terms.split(' ');
    console.log(`termsArray: ${termsArray}`);
    let totalFilmsFetched: string[] = [];

    const fetchFilmsHandler = async (searchType: string) => {
      // setIsLoading(true);
      // setError(null);

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
          // console.log(`data: ${JSON.stringify(data.results)}`);
          console.log(`data films: ${JSON.stringify(data.results[0].films)}`);

          // const transformedMovies: any[] = data.results.map(
          //   (filmsData: any) => [filmsData.films]
          // );
          /* const transformedMovies: { films: string[] | [] } = data.results.map(
            (termData: any) => {
              return { films: termData.films || [] };
            }
          ); */

          const transformedMovies = JSON.parse(
            JSON.stringify(data.results[0].films)
          );
          console.log(
            `transformedMovies: ${transformedMovies} | length: ${transformedMovies.length}`
          );
          // const uniqueMovies = [...new Set(transformedMovies)];
          // const uniqueMovies = Array.from(new Set(transformedMovies));
          /* uniqueMovies?.filter(
            (film: string) => !totalFilmsFetched.includes(film)
          ); */
          // if (uniqueMovies !== undefined && uniqueMovies.length !== 0) {
          //   totalFilmsFetched.push(uniqueMovies);
          // }

          /* if (
            transformedMovies !== undefined &&
            transformedMovies.length !== 0
          ) {
            const moviesArray = transformedMovies.split(',');
            console.log(`moviesArray: ${moviesArray}`);
            moviesArray.forEach((film: string) => {
              console.log(
                `totalFilmsFetched before addition: ${totalFilmsFetched}`
              );
              console.log(`film to add: ${film}`);
              totalFilmsFetched.push(film);
              console.log(
                `totalFilmsFetched after addition: ${totalFilmsFetched}`
              );
            });
          } */

          transformedMovies.forEach((movie: any) => {
            console.log(movie);
            totalFilmsFetched.push(movie);
          });

          console.log(
            `transformed${searchType}Movies: ${
              transformedMovies || []
            } | length: ${transformedMovies.length}`
          );
          /* console.log(
            `unique${searchType}Movies: ${uniqueMovies || []} | length: ${
              uniqueMovies.length
            }`
          ); */
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
      // setIsLoading(false);
    };

    const planetFilms = await fetchFilmsHandler('planets');
    console.log(
      `fetchFilmsHandler('planets') > planetFilms: ${planetFilms} | length: ${planetFilms?.length}`
    );

    const peopleFilms = await fetchFilmsHandler('people');
    console.log(
      `fetchFilmsHandler('people') > peopleFilms: ${peopleFilms} | length: ${peopleFilms?.length}`
    );

    // const totalFilms: string[] = [...planetFilms || [], ...peopleFilms || []];

    // function onlyUnique(value: any, index: any, self: string | any[]) {
    //   return self.indexOf(value) === index;
    // }

    // var uniqueFilms = totalFilms.filter(onlyUnique);

    // let regex = /\d+/g;
    /* var string = 'Any string you want!';
    var matches = string.match(regex); */

    let uniqueFilms: string[] = [];

    console.log('//////////');

    peopleFilms.forEach((url) => {
      const existingUrl = uniqueFilms.find((item?) => item === url) || '';
      console.log(`existingUrl: ${existingUrl}`);
      // const filmNumber = url.substring(-2, 1);
      if (existingUrl === '') {
        uniqueFilms = [...uniqueFilms, url];
        console.log(`url added: ${url}. uniqueFilms: ${uniqueFilms}`);
      }
      // console.log(filmNumber);
      // return filmNumber.substr(-2, 1);
    });
    console.log('//////////');
    console.log(`uniqueFilms: ${uniqueFilms} | length: ${uniqueFilms?.length}`);

    /* const uniqueFilms = (totalFilms: string[]) => {
      return [
        ...new Set(
          totalFilms.map((url) => {
            return url.replace(/[^0-9]/g, '')![1];
          })
        ),
      ];
    }; */
    // console.log(`uniqueFilms: ${uniqueFilms}`);

    /* const fetchPlanetData = async (term: string) => {
      const response = await fetch(`${baseUrl}/planets/?search=${term}`);

      if (!response.ok) {
        throw new Error(ERRORMESSAGE.fetchSearchDataError);
      }

      const data = await response.json();

      return data;
    };

    termsArray.forEach(async (term) => {
      const searchPlanetData = await fetchPlanetData(term);
      console.log(`Planet films. Term (planet?): ${term}`);
      console.log(`planet > results before filter: ${searchPlanetData}`);
      let planetFilms: string[] = searchPlanetData.results.films || [];
      console.log(`planet > totalFilmsFetched before insertion: ${totalFilmsFetched}`);
      console.log(
        `planet > planetFilms before filter: ${planetFilms.toString()}`
      );
      planetFilms.filter((film: string) => !totalFilmsFetched.includes(film));
      console.log(`planet > planetFilms after filter: ${planetFilms}`);
      totalFilmsFetched.push(planetFilms);
      console.log(`planet > totalFilmsFetched after insertion: ${totalFilmsFetched}`);
    }); */

    /* const fetchFilmData = async (term: string) => {
      const response = await fetch(`${baseUrl}/films/?search=${term}`);

      if (!response.ok) {
        throw new Error(ERRORMESSAGE.fetchSearchDataError);
      }

      const data = await response.json();

      return data;
    };
    const fetchPeopleData = async (term: string) => {
      const response = await fetch(`${baseUrl}/people/?search=${term}`);

      if (!response.ok) {
        throw new Error(ERRORMESSAGE.fetchSearchDataError);
      }

      const data = await response.json();

      return data;
    }; */

    /* try {
      termsArray.map(async (term) => {
        const searchPlanetData = await fetchPlanetData(term);
        const planetFilms: string[] = searchPlanetData.results.map(
          (item: { films: string[] }) => {
            console.log(`planet > totalFilmsFetched: ${totalFilmsFetched}`);
            console.log(`planet > planetFilms before filter: ${totalFilmsFetched}`);
            item.films.filter((film: string) => !totalFilmsFetched.includes(film));
            console.log(`planet > planetFilms after filter: ${totalFilmsFetched}`);
            return [item.films] || [];
          }
        );
        // console.log(`planet films: ${planetFilms}`);

        const searchFilmData = await fetchFilmData(term);
        const filmFilms: string[] = searchFilmData.results.map(
          (item: { url: string[] }) => {
            console.log(`film > totalFilmsFetched: ${totalFilmsFetched}`);
            console.log(`film > filmFilms before filter: ${totalFilmsFetched}`);
            item.url.filter((film: string) => !totalFilmsFetched.includes(film));
            console.log(`film > filmFilms after filter: ${totalFilmsFetched}`);
            return [item.url] || [];
          }
        );
        // console.log(`film films: ${filmFilms}`);

        const searchPeopleData = await fetchPeopleData(term);
        const peopleFilms: string[] = searchPeopleData.results.map(
          (item: { films: [] }) => {
            console.log(`people > totalFilmsFetched: ${totalFilmsFetched}`);
            console.log(`people > peopleFilms before filter: ${totalFilmsFetched}`);
            item.films.filter((film: string) => !totalFilmsFetched.includes(film));
            console.log(`people > peopleFilms after filter: ${totalFilmsFetched}`);
            return [item.films];
          }
        );
        // console.log(`people films: ${peopleFilms}`);

        const termFilms: any[] = [...planetFilms, ...filmFilms, ...peopleFilms];
        console.log(`Term films: ${termFilms}`);
        // totalFilmsFetched = [...totalFilmsFetched, ...termFilms];
        console.log(`Previous total films: ${totalFilmsFetched}`);
        // const previoustotalFilmsFetched = [...totalFilmsFetched];
        // totalFilmsFetched = [...previoustotalFilmsFetched, ]
        totalFilmsFetched.push([...termFilms]);
        console.log(`Total films: ${totalFilmsFetched}`);
      });

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
