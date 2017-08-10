import * as React from 'react';

export default function Modal({children, onClose, onClickBackdrop}) {
  return <div className="modal-backdrop" onClick={onClickBackdrop}>
    <div className="modal" onClick={e => e.stopPropagation()}>
      {onClose ? <div className="modal-close" onClick={onClose}>&#10005;</div> : null}
      {children}
    </div>
  </div>;
}
