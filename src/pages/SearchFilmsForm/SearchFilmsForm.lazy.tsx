import React, { lazy, Suspense } from 'react';

const LazySearchFilmsForm = lazy(() => import('./SearchFilmsForm'));

const SearchFilmsForm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySearchFilmsForm {...props} />
  </Suspense>
);

export default SearchFilmsForm;
