import * as uuid from 'uuid';
import * as React from 'react';

export default function Card({type, children}) {
  return <div
    className={type ? `card-${type}` : 'card'}
  >{children}</div>;
}

export function CardBody({children}) {
  return <div className="card-body">{children}</div>;
}

export function CardHeader({children}) {
  return <div className="card-header">{children}</div>;
}

export function CardLoading({percent}) {
  return <div className="card-loading" style={{width: `${percent}%`}} />;
}
