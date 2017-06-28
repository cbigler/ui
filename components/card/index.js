import * as uuid from 'uuid';
import * as React from 'react';
import classnames from 'classnames';

export default function Card({type, children}) {
  return <div
    className={type ? `card-${type}` : 'card'}
  >{children}</div>;
}

export function CardBody({children, className}) {
  return <div className={classnames('card-body', className)}>{children}</div>;
}

export function CardHeader({children, className}) {
  return <div className={classnames('card-header', className)}>{children}</div>;
}

export function CardLoading({percent, className}) {
  return <div className={classnames('card-loading', className)} style={{width: `${percent}%`}} />;
}
