import React, { lazy, Suspense } from 'react';

const LazyFilmDetails = lazy(() => import('./FilmDetails'));

const FilmDetails = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyFilmDetails {...props} />
  </Suspense>
);

export default FilmDetails;
