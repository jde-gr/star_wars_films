import React, { FC } from 'react';
import { format } from 'date-fns';

import { _MS_PER_YEAR } from '../../core/constants';
import styles from './Film.module.css';
import Card from '../../UI/Card/Card';
import { Link, To } from 'react-router-dom';

interface FilmProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  replace?: boolean;
  state?: any;
  to: To;
  reloadDocument?: boolean;
  film: {
    url: string;
    title: string;
    episode_id: number;
    release_date: string;
    director: string;
    producer: string;
  };
  terms: string;
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
  const { title, episode_id, release_date, url, director, producer } =
    props.film;

  const date = new Date(release_date);
  const now = new Date();
  const formattedDate = format(date, 'dd-MM-yyyy');
  const yearDiff = findYearDifference(date, now);
  return (
    <Link
      to={`/film/details/${episode_id}`}
      state={{
        film: {
          url: url,
          title: title,
          episode_id: episode_id,
          release_date: release_date,
          director: director,
          producer: producer,
        },
        terms: props.terms,
      }}
      key={url}
      className={styles.link}
    >
      <Card data-test-id={url}>
        <header>
          <h3 className={styles.title}>{title}</h3>
          <h3
            className={styles.episode}
          >{`Episode ${episode_id.toString()}`}</h3>
        </header>
        <div>
          <h3
            className={styles.release}
          >{`${formattedDate} (${yearDiff} years ago)`}</h3>
        </div>
      </Card>
    </Link>
  );
};

export default Film;
