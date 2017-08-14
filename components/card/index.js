import * as uuid from 'uuid';
import * as React from 'react';
import classnames from 'classnames';

export default function Card({type, children}) {
  return <div
    className={classnames('card', type ? `card-${type}` : null)}
  >{children}</div>;
}

export function CardBody({children, className}) {
  return <div className={classnames('card-body', className)}>{children}</div>;
}

export function CardHeader({children, size, className}) {
  return <div className={classnames('card-header', `card-header-${size || 'base'}`, className)}>{children}</div>;
}

export function CardLoading({percent, className}) {
  return <div className={classnames('card-loading', className)} style={{width: `${percent}%`}} />;
}
