import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchFilmsForm from './SearchFilmsForm';

describe('<SearchFilmsForm />', () => {
  test('it should mount', () => {
    render(<SearchFilmsForm />);

    const searchFilmsForm = screen.getByTestId('SearchFilmsForm');

    expect(searchFilmsForm).toBeInTheDocument();
  });
});
