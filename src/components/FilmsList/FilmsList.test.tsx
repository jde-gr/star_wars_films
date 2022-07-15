import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilmsList from './FilmsList';

describe('<FilmsList />', () => {
  test('it should mount', () => {
    render(<FilmsList />);
    
    const filmsList = screen.getByTestId('FilmsList');

    expect(filmsList).toBeInTheDocument();
  });
});