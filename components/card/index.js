import * as uuid from 'uuid';
import * as React from 'react';
import './styles.scss';

export default function Card({type, children}) {
  return <div
    className={type ? `card-${type}` : 'card'}
  >{children}</div>;
}

export function CardBody({children}) {
  return <div className="card-body">{children}</div>;
}
