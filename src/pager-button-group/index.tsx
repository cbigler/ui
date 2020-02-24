import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import Icons from '../icons';
import colorVariables from '../../variables/colors.json';

import styles from './styles.module.scss';

const PagerButtonGroup: React.FC<any> = ({
  showFirstLastButtons,

  disabledPrevious,
  disabledNext,
  disabledStart,
  disabledEnd,

  onClickPrevious,
  onClickNext,
  onClickStart,
  onClickEnd,
}) => {
  return <div className={styles.pagerButtonGroup}>
    {showFirstLastButtons ? <div
      className={classnames(styles.pagerButton, styles.pagerButtonPrevStart, {[styles.pagerButtonDisabled]: disabledStart})}
      onClick={e => {
        if (!disabledStart) {
          onClickStart(e);
        }
      }}
    ><Icons.PlaybackPrev
    color={disabledStart ? colorVariables.gray400 : colorVariables.midnight}
    width={20}
    height={20}/></div> : null}

    <div
      className={classnames(styles.pagerButton, styles.pagerButtonPrev, {[styles.pagerButtonDisabled]: disabledPrevious})}
      onClick={e => {
        if (!disabledPrevious) {
          onClickPrevious(e);
        }
      }}
    >Prev</div>

    <div
      className={classnames(styles.pagerButton, styles.pagerButtonNext, {[styles.pagerButtonDisabled]: disabledNext})}
      onClick={e => {
        if (!disabledNext) {
          onClickNext(e);
        }
      }}
    >Next</div>

    {showFirstLastButtons ? <div
      className={classnames(styles.pagerButton, styles.pagerButtonNextEnd, {[styles.pagerButtonDisabled]: disabledEnd})}
      onClick={e => {
        if (!disabledEnd) {
          onClickEnd(e);
        }
      }}
    ><Icons.PlaybackNext
    color={disabledEnd ? colorVariables.gray400 : colorVariables.midnight}
    width={20}
    height={20}/></div> : null}
  </div>;
}

PagerButtonGroup.displayName = 'PagerButtonGroup';
PagerButtonGroup.propTypes = {
  onClickNext: propTypes.func.isRequired,
  onClickPrevious: propTypes.func.isRequired,

  showFirstLastButtons: propTypes.bool,
  onClickStart: propTypes.func,
  onClickEnd: propTypes.func,

  disabledStart: propTypes.bool,
  disabledEnd: propTypes.bool,
  disabledNext: propTypes.bool,
  disabledPrevious: propTypes.bool,
};
export default PagerButtonGroup;
