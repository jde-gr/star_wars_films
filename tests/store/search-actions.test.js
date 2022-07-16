import { fetchFilmsHandler } from '../../src/store/search-actions';

describe('Tests in search-actions.tsx', () => {
  test('Should return a list of films after fetching films', () => {
    const search = fetchFilmsHandler('planets');
    expect(typeof search).toBe('object');
  });
});
