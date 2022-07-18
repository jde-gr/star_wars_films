import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilmDetails from './FilmDetails';

describe('<FilmDetails />', () => {
  test('it should mount', () => {
    render(<FilmDetails />);

    const url = 'https://swapi.dev/api/films/5/';

    const filmDetails = screen.getByTestId(url);

    expect(filmDetails).toBeInTheDocument();
  });
});
