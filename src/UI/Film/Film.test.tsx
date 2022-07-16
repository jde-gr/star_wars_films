import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Film from './Film';

describe('<Film />', () => {
  test('it should mount', () => {
    render(
      <Film
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

    const film = screen.getByTestId(url);

    expect(film).toBeInTheDocument();
  });
});
