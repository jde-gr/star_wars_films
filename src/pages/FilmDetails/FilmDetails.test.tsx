import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilmDetails from './FilmDetails';

describe('<FilmDetails />', () => {
  test('it should mount', () => {
    render(
      <FilmDetails
        film={{
          url: 'https://swapi.dev/api/films/5/',
          title: 'Attack of the Clones',
          episode_id: 2,
          release_date: '2002-05-16',
          director: 'George Lucas',
          producer: 'Rick McCallum',
        }}
      />
    );

    const url = 'https://swapi.dev/api/films/5/';

    const filmDetails = screen.getByTestId(url);

    expect(filmDetails).toBeInTheDocument();
  });
});
