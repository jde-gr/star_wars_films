import React, { lazy, Suspense } from 'react';

const LazyFilmsList = lazy(() => import('./FilmsList'));

const FilmsList = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyFilmsList terms={''} {...props} />
  </Suspense>
);

export default FilmsList;
