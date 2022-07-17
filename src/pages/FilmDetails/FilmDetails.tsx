import { format } from 'date-fns';
import React, { FC } from 'react';
import Card from '../../UI/Card/Card';
import styles from './FilmDetails.module.css';

interface FilmDetailsProps {
  film: {
    url: string;
    title: string;
    episode_id: number;
    release_date: string;
    director: string;
    producer: string;
  };
}

const FilmDetails: FC<FilmDetailsProps> = (props) => {
  const { title, episode_id, release_date, director, producer, url } =
    props.film;

  const date = new Date(release_date);
  const formattedDate = format(date, 'dd-MM-yyyy');

  return (
    <>
      <h3 className={styles.title} data-test-id={url}>
        {title}{' '}
        <span
          className={styles.episode}
        >{`Episode ${episode_id.toString()}`}</span>{' '}
      </h3>
      <Card className={styles.FilmDetails} data-test-id={url}>
        <header>
          <p>Director: {director}</p>
          <p>Producer: {producer}</p>
          <p className={styles.release}>Release date: {`${formattedDate}`}</p>
        </header>
      </Card>
    </>
  );
};

export default FilmDetails;
