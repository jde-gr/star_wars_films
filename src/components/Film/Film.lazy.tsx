import React, { lazy, Suspense } from 'react';

const LazyFilm = lazy(() => import('./Film'));

const Film = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyFilm
      terms={''}
      to={''}
      film={{
        url: '',
        title: '',
        episode_id: 0,
        release_date: '',
        director: '',
        producer: '',
      }}
      {...props}
    />
  </Suspense>
);

export default Film;
