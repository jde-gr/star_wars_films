import React, { FC, useEffect } from 'react';
// import { baseUrl, ERRORMESSAGE } from '../../core/constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchSearchData } from '../../store/search-actions';
import Film from '../../UI/Film/Film';
// import styles from './FilmsList.module.css';

interface FilmsListProps {
  terms: string;
}

const FilmsList: FC<FilmsListProps> = ({ terms }) => {
  const films = useAppSelector((state) => state.search.films);
  const dispatch = useAppDispatch();
  // const terms = 'lars clone tatooine';

  /* const fetchPlanetsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    let totalFilms: any[] = [];

    try {
      // not implemented
    } catch (error) {
      setError(error.message);
      throw new Error(ERRORMESSAGE.fetchSearchDataError);
    }
    setIsLoading(false);
  }, [termsArray]); */

  /* const fetchPeopleHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    let totalFilms: any[] = [];

    try {
      // not implemented
    } catch (error) {
      setError(error.message);
      throw new Error(ERRORMESSAGE.fetchSearchDataError);
    }
    setIsLoading(false);
  }, [termsArray]); */

  /* useEffect(() => {
    fetchFilmsHandler('planets');
    // fetchFilmsHandler('people');
  }, [fetchFilmsHandler]); */

  useEffect(() => {
    dispatch(fetchSearchData(terms));
  }, [dispatch, terms]);

  return (
    <section data-test-id='filmsList'>
      {films.map((film) => (
        <Film
          key={film!.url}
          film={{
            url: film!.url,
            title: film!.title,
            episode_id: film!.episode_id,
            release_date: film!.release_date,
            director: film!.director,
            producer: film!.producer,
          }}
        />
      ))}
    </section>
  );
};

export default FilmsList;
