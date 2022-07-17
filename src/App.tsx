import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './App.module.css';
import FilmsList from './components/FilmsList/FilmsList';

function App() {
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const [terms, setTerms] = useState('');

  const searchHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setTerms(searchInputRef.current?.value || '');
  };

  return (
    <div className={styles.App}>
      <Row>
        <Col xs={12} md={{ span: 10, offset: 1 }}>
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
        </Col>
      </Row>
    </div>
  );
}

export default App;
