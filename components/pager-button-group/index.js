import * as React from 'react';

export default function PagerButtonGroup({
  showFirstLastButtons,

  onClickPrevious,
  onClickNext,
  onClickStart,
  onClickEnd,
}) {
  return <div className="pager-button-group">
    {showFirstLastButtons ? <div className="pager-button" onClick={onClickStart}>&laquo;</div> : null}
    <div className="pager-button" onClick={onClickNext}>&lsaquo;</div>
    <div className="pager-button" onClick={onClickPrevious}>&rsaquo;</div>
    {showFirstLastButtons ? <div className="pager-button" onClick={onClickEnd}>&raquo;</div> : null}
  </div>;
}
