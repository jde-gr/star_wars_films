import React, { FC } from 'react';
import { format } from 'date-fns';

import { _MS_PER_YEAR } from '../../core/constants';
import styles from './Film.module.css';
import Card from '../Card/Card';

interface FilmProps {
  film: {
    url: string;
    title: string;
    episode_id: number;
    release_date: string;
    director: string;
    producer: string;
  };
}

function findYearDifference(older: Date, newer: Date) {
  const olderUtc = Date.UTC(
    older.getFullYear(),
    older.getMonth(),
    older.getDate()
  );
  const newerUtc = Date.UTC(
    newer.getFullYear(),
    newer.getMonth(),
    newer.getDate()
  );
  return Math.floor((newerUtc - olderUtc) / _MS_PER_YEAR);
}

const Film: FC<FilmProps> = (props) => {
  const { title, episode_id, release_date, url } = props.film;

  const date = new Date(release_date);
  const now = new Date();
  const formattedDate = format(date, 'dd-MM-yyyy');
  const yearDiff = findYearDifference(date, now);
  return (
    <Card className={styles.Film} data-test-id={url}>
      <header>
        <h3 className={styles.title}>{title}</h3>
        <h3 className={styles.episode}>{`Episode ${episode_id.toString()}`}</h3>
        <h3
          className={styles.release}
        >{`${formattedDate} (${yearDiff} years ago)`}</h3>
      </header>
    </Card>
  );
};

export default Film;
