import * as React from 'react';

export default function Modal({children, onClickBackdrop}) {
  return <div className="modal-backdrop" onClick={onClickBackdrop}>
    <div className="modal" onClick={e => e.stopPropagation()}>{children}</div>
  </div>;
}

export function ModalClose({onClick}) {
  return <span className="modal-close" onClick={onClick}>&times;</span>;
}
