import * as React from 'react';
import classnames from 'classnames';

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
    {showFirstLastButtons ? <div
      className={classnames('pager-button', {disabled: disabledStart})}
      onClick={e => {
        if (!disabledStart) {
          onClickStart(e);
        }
      }}
    >&laquo;</div> : null}

    <div
      className={classnames('pager-button', {disabled: disabledPrevious})}
      onClick={e => {
        if (!disabledPrevious) {
          onClickPrevious(e);
        }
      }}
    >&lsaquo;</div>
    <div
      className={classnames('pager-button', {disabled: disabledNext})}
      onClick={e => {
        if (!disabledNext) {
          onClickNext(e);
        }
      }}
    >&rsaquo;</div>

    {showFirstLastButtons ? <div
      className={classnames('pager-button', {disabled: disabledEnd})}
      onClick={e => {
        if (!disabledEnd) {
          onClickEnd(e);
        }
      }}
    >&raquo;</div> : null}
  </div>;
}
