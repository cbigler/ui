import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import colors from '../../variables/colors.json';

const useStyles = makeStyles(theme => ({
  tooltip: {
    color: colors.white,
    backgroundColor: colors.midnight,
    padding: '8px 12px',
    fontSize: 12,
    fontWeight: 600,
  },
  tooltipPlacementBottom: {
    marginTop: 8,
  },
}));

// New info/etc popup based on material ui
export default function Popup({
  target,
  contents,
  placement,
  enterDelay,
  classes,
  wrap,
}: {
  target: React.ReactElement,
  contents: React.ReactNode,
  placement?: TooltipProps['placement'],
  enterDelay?: TooltipProps['enterDelay'],
  classes?: Record<string, string>,
  wrap?: boolean,
}) {
  classes = classes || useStyles();

  return <Tooltip
    classes={classes}
    title={contents}
    placement={placement || "bottom-start"}
    enterDelay={enterDelay || 700}
  >
    <div style={{whiteSpace: wrap ? undefined : 'nowrap'}}>{target}</div>
  </Tooltip>;
}
