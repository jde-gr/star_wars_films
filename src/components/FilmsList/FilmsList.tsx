import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchSearchData } from '../../store/search-actions';
import Film from '../Film/Film';
import styles from './FilmsList.module.css';

interface FilmsListProps {
  terms: string;
}

const FilmsList: FC<FilmsListProps> = ({ terms }) => {
  const films = useAppSelector((state) => state.search.films);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSearchData(terms));
  }, [dispatch, terms]);

  return (
    <section data-test-id='filmsList' className={styles.list}>
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
          terms={terms}
          to={''}
          className={styles.film}
        />
      ))}
    </section>
  );
};

export default FilmsList;
