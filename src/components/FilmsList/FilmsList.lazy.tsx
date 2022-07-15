import React, { lazy, Suspense } from 'react';

const LazyFilmsList = lazy(() => import('./FilmsList'));

const FilmsList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFilmsList {...props} />
  </Suspense>
);

export default FilmsList;
