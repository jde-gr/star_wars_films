import { baseUrl, ERRORMESSAGE } from '../../core/constants';

export const FilmListDataSource = {
  getFilms: (url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => data.filmData);
  },
  fetchFilms: async (
    searchType: string,
    termsArray: string[],
    totalFilmsFetched: string[]
  ) => {
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
            searchType === 'films' ? data.results[0].url : data.results[0].films
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
  },
};
