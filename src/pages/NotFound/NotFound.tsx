import React, { FC } from 'react';
import styles from './NotFound.module.css';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => (
  <div className={styles.centered} data-testid='NotFound'>
    <p>Page not found!</p>
  </div>
);

export default NotFound;
