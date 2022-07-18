import { format } from 'date-fns';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { cursorTo } from 'readline';
import { ArrowBack } from '@mui/icons-material';

import Card from '../../UI/Card/Card';
import styles from './FilmDetails.module.css';

interface FilmDetailsProps {}

type LocationState = {
  film: {
    url: string;
    title: string;
    episode_id: number;
    release_date: string;
    director: string;
    producer: string;
  };
};

const FilmDetails: FC<FilmDetailsProps> = (props) => {
  // const { title, episode_id, release_date, director, producer, url } =
  //   props.film;
  const location = useLocation();
  const { film } = location.state as LocationState;
  const navigate = useNavigate();

  console.log(
    `FilmDetails: url: ${film.url} | title: ${film.title} | episode_id: ${film.episode_id} | release_date: ${film.release_date} | director: ${film.director} | producer: ${film.producer}`
  );

  // const [movie, setMovie] = useState(film);

  const date = new Date(film.release_date);
  const formattedDate = format(date, 'dd-MM-yyyy');

  function formatLines(_text: string) {
    let lines = _text.split(',');
    let elements = [];
    for (let i = 0; i < lines.length; i++) {
      elements.push(lines[i]);
      if (i < lines.length - 1) {
        elements.push(',');
        elements.push(<br key={i} />);
      }
    }
    return elements;
  }

  let formattedProducer = formatLines(film.producer);

  // .slice(0, -1);

  // const fetchMovieHandler = useCallback(async () => {
  //   const filmData = await FilmDataSource.fetchFilmData(url!);
  //   const result = {
  //     film: {
  //       url: filmData.url,
  //       title: filmData.title,
  //       episode_id: filmData.episode_id,
  //       release_date: filmData.release_date,
  //       director: filmData.director,
  //       producer: filmData.producer,
  //     },
  //   };
  //   setMovie(result);
  // }, [url]);

  // useEffect(() => {
  //   if (url) {
  //     fetchMovieHandler();
  //   }
  // }, [fetchMovieHandler, url]);

  return (
    <>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => navigate(-1)}
        className={styles.link}
      >
        <ArrowBack className={styles.arrow} />{' '}
        <span className={styles.linkText}>Back to results</span>
      </div>
      <div className={styles.topCentered}>
        <div className={styles.container}>
          <h3 className={styles.title} data-test-id={film.url}>
            {film.title}{' '}
            <span
              className={styles.episode}
            >{`Episode ${film.episode_id.toString()}`}</span>{' '}
          </h3>
          <Card className={styles.card} data-test-id={film.url}>
            <header className={styles.header}>
              <p className={`${styles.p} ${styles.element} ${styles.director}`}>
                Director: {film.director}
              </p>
              <div className={`${styles.producer} ${styles.element}`}>
                <p className={styles.p}>Producer: </p>
                <p className={`${styles.p} ${styles.producers}`}>
                  {formattedProducer}
                </p>
              </div>
            </header>
            <p className={`${styles.p} ${styles.release}`}>
              Release date: {`${formattedDate}`}
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FilmDetails;
