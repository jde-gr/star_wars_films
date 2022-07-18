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
          throw new Error(ERRORMESSAGE.fetchSearchDataError);
        }

        const data = await response.json();

        const transformedMovies = JSON.parse(
          JSON.stringify(
            searchType === 'films' ? data.results[0].url : data.results[0].films
          )
        );

        if (searchType === 'films') {
          totalFilmsFetched.push(transformedMovies);
        } else {
          transformedMovies.forEach((movie: any) => {
            totalFilmsFetched.push(movie);
          });
        }
      } catch (error) {
        /* console.log('catch(error)');
          // setError(error.message);
          throw new Error(ERRORMESSAGE.fetchSearchDataError); */
      }
    }
    return totalFilmsFetched;
  },
};
