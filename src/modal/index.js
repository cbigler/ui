import * as React from 'react';
import classnames from 'classnames';

export default function Modal({
  children,

  onClickBackdrop,
  onClose,
}) {
  return <div
    className={classnames('modal-backdrop', {})}
    onClick={onClickBackdrop}
  >
    <div
      className="modal"
      onClick={e => e.stopPropagation()}
    >
      {onClose ? <div className="modal-close" onClick={onClose}>&#10005;</div> : null}
      {children}
    </div>
  </div>;
}
