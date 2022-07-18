import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FilmsList from '../../components/FilmsList/FilmsList';
import styles from './SearchFilmsForm.module.css';

interface SearchFilmsFormProps {}

const SearchFilmsForm: FC<SearchFilmsFormProps> = () => {
  const params = useParams();
  const { search } = params;

  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const [terms, setTerms] = useState('');

  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    if (search) {
      setTerms(search);
    }
  }, [search]);

  const searchHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setTerms(searchInputRef.current?.value || '');
  };

  return (
    <div
      className={terms === '' ? styles.centered : styles.topCentered}
      style={{ height: height }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>
          Search films by title, characters or planets
        </h2>
        <form className={styles.form} onSubmit={searchHandler}>
          <input
            className={styles.input}
            type='text'
            id='search'
            ref={searchInputRef}
          />
          <button className={styles.submit}>GO</button>
        </form>
        {terms !== '' && <FilmsList terms={terms} />}
      </div>
    </div>
  );
};

export default SearchFilmsForm;
