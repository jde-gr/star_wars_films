import React, { FC, useCallback, useEffect } from 'react';
import { baseUrl, ERRORMESSAGE } from '../../core/constants';
import { useAppDispatch } from '../../store/hooks';
import { fetchSearchData } from '../../store/search-actions';
import styles from './FilmsList.module.css';

interface FilmsListProps {}

const FilmsList: FC<FilmsListProps> = () => {
  const dispatch = useAppDispatch();

  const terms = 'lars tatooine';
  const termsArray = terms.split(' ');

  /* const fetchPlanetsHandler = useCallback(async () => {
    // setIsLoading(true);
    // setError(null);
    let totalFilms: any[] = [];

    try {
      console.log(`fetchPlanetsHandler ${termsArray.length}`);
      termsArray.forEach(async (term) => {
        const response = await fetch(`${baseUrl}/planets/?search=${term}`);
        if (!response.ok) {
          console.log('!response.ok');
          throw new Error(ERRORMESSAGE.fetchSearchDataError);
        }

        const data = await response.json();

        console.log(term);
        const transformedPlanetMovies: any[] = data.results.map(
          (planetData: any) => planetData.films
        );
        totalFilms.push(transformedPlanetMovies || []);
        console.log(
          `transformedPlanetMovies: ${transformedPlanetMovies || []}`
        );
        console.log(`totalFilms: ${totalFilms}`);
      });
    } catch (error) {
      console.log('catch(error)');
      // setError(error.message);
      throw new Error(ERRORMESSAGE.fetchSearchDataError);
    }
    // setIsLoading(false);
  }, [termsArray]); */

  /* const fetchPeopleHandler = useCallback(async () => {
    // setIsLoading(true);
    // setError(null);
    let totalFilms: any[] = [];

    try {
      console.log(`fetchPeopleHandler ${termsArray.length}`);
      termsArray.forEach(async (term) => {
        const response = await fetch(`${baseUrl}/people/?search=${term}`);
        if (!response.ok) {
          console.log('!response.ok');
          throw new Error(ERRORMESSAGE.fetchSearchDataError);
        }

        const data = await response.json();

        console.log(term);
        const transformedPeopleMovies: any[] = data.results.map(
          (peopleData: any) => peopleData.films
        );
        totalFilms.push(transformedPeopleMovies || []);
        console.log(
          `transformedPeopleMovies: ${transformedPeopleMovies || []}`
        );
        console.log(`totalFilms: ${totalFilms}`);
      });
    } catch (error) {
      console.log('catch(error)');
      // setError(error.message);
      throw new Error(ERRORMESSAGE.fetchSearchDataError);
    }
    // setIsLoading(false);
  }, [termsArray]); */

  /* const fetchFilmsHandler = useCallback(
    async (searchType: string) => {
      // setIsLoading(true);
      // setError(null);
      let totalFilms: any[] = [];

      try {
        termsArray.forEach(async (term) => {
          const response = await fetch(
            `${baseUrl}/${searchType}/?search=${term}`
          );
          if (!response.ok) {
            console.log('!response.ok');
            throw new Error(ERRORMESSAGE.fetchSearchDataError);
          }

          const data = await response.json();

          console.log(`fetch${searchType}Handler ${termsArray.length}`);
          console.log(term);
          const transformedMovies: any[] = data.results.map(
            (peopleData: any) => peopleData.films
          );
          totalFilms.push(transformedMovies || []);
          console.log(
            `transformed${searchType}Movies: ${transformedMovies || []}`
          );
          console.log(`totalFilms: ${totalFilms}`);
        });
      } catch (error) {
        console.log('catch(error)');
        // setError(error.message);
        throw new Error(ERRORMESSAGE.fetchSearchDataError);
      }
      // setIsLoading(false);
    },
    [termsArray]
  ); */

  /* useEffect(() => {
    fetchFilmsHandler('planets');
    // fetchFilmsHandler('people');
  }, [fetchFilmsHandler]); */

  useEffect(() => {
    dispatch(fetchSearchData('lars tatooine'));
  }, [dispatch]);

  return (
    <div className={styles.FilmsList} data-testid='FilmsList'>
      FilmsList Component
    </div>
  );
};

export default FilmsList;
