import * as React from 'react';

export default function PagerButtonGroup({
  showFirstLastButtons,

  disabledPrevious,
  disabledNext,
  disabledStart,
  disabledEnd,

  onClickPrevious,
  onClickNext,
  onClickStart,
  onClickEnd,
}) {
  return <div className="pager-button-group">
    {showFirstLastButtons ? <div className={classnames('pager-button', {disabled: disabledEnd})} onClick={onClickEnd}>&laquo;</div> : null}
    <div className={classnames('pager-button', {disabled: disabledPrevious})} onClick={onClickPrevious}>&lsaquo;</div>
    <div className={classnames('pager-button', {disabled: disabledNext})} onClick={onClickNext}>&rsaquo;</div>
    {showFirstLastButtons ? <div className={classnames('pager-button', {disabled: disabledStart})} onClick={onClickStart}>&raquo;</div> : null}
  </div>;
}
