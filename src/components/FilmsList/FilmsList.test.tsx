import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilmsList from './FilmsList';
import App from '../../App';

describe('<FilmsList />', () => {
  test('it should mount', () => {
    //act
    render(<App />);
    //assert
    expect(screen.getByTestId('filmsList')).toBeInTheDocument();
  });

  /* it('shows a list of films', async () => {
    // Define a data source
    const films: Film[] = [
      buildFilm({
        id: 'id-1',
        title: 'A New Hope',
        episode_id: 4,
        release_date: '25-05-1977 (45 years ago)',
        director: 'George Lucas',
        producer: 'Gary Kurtz, Rick McCallum',
      }),
      buildFilm({
        id: 'id-3',
        title: 'Return of the Jedi',
        episode_id: 6,
        release_date: '25-05-1983 (39 years ago)',
        director: 'Richard Marquand',
        producer: 'Howard G. Kazanjian, George Lucas, Rick McCallum',
      }),
      buildFilm({
        id: 'id-4',
        title: 'The Phantom Menace',
        episode_id: 1,
        release_date: '19-05-1999 (23 years ago)',
        director: 'George Lucas',
        producer: 'Rick McCallum',
      }),
      buildFilm({
        id: 'id-5',
        title: 'Attack of the Clones',
        episode_id: 2,
        release_date: '16-05-2002 (20 years ago)',
        director: 'George Lucas',
        producer: 'Gary Kurtz, Rick McCallum',
      }),
      buildFilm({
        id: 'id-6',
        title: 'Revenge of the Sith',
        episode_id: 3,
        release_date: '19-05-2005 (17 years ago)',
        director: 'George Lucas',
        producer: 'Gary Kurtz, Rick McCallum',
      }),
    ];
    const filmsRepository = {
      getFilms: jest.fn(() => Promise.resolve(films)),
    };
    render(<FilmsList filmsRepository={filmsRepository} />);
    // Search in async way all the product titles at the screen
    const foundFilms = await Promise.all(
      films.map((film) => screen.findByText(film.title))
    );
    expect(foundFilms.length).toBe(films.length);
  });

  // What happens when the request fails?
  // What happens when the list is empty?
  it('shows a message when list is empty', async () => {
    // Not implemented yet
    expect(screen.queryByText(emptyMessage)).toBeInTheDocument();
  }); */
});
