import React, { FC } from 'react';
import styles from './Card.module.css';

interface CardProps {
  className?: string;
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}

const Card: FC<CardProps> = (props) => (
  <section
    className={`${styles.card} ${props.className ? props.className : ''}`}
    data-testid='Card'
  >
    {props.children}
  </section>
);

export default Card;
