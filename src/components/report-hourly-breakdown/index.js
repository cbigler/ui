import moment from 'moment';
import React from 'react';
import ReportWrapper, { ReportCard } from '@density/ui-report-wrapper';
import styles from './styles.scss';
import colorVariables from '@density/ui/variables/colors.json';
import propTypes from 'prop-types';

// From 'hex-rgb' npm package
// The package isn't pre-compiled by default, which means that create react app v1 doesn't know how
// ot use it.
const hexChars = 'a-f\\d';
const match3or4Hex = `#?[${hexChars}]{3}[${hexChars}]?`;
const match6or8Hex = `#?[${hexChars}]{6}([${hexChars}]{2})?`;
const nonHexChars = new RegExp(`[^#${hexChars}]`, 'gi');
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, 'i');

function hexRgb(hex, options = {}) {
  if (typeof hex !== 'string' || nonHexChars.test(hex) || !validHexSize.test(hex)) {
    throw new TypeError('Expected a valid hex string');
  }

  hex = hex.replace(/^#/, '');
  let alpha = 255;

  if (hex.length === 8) {
    alpha = parseInt(hex.slice(6, 8), 16) / 255;
    hex = hex.substring(0, 6);
  }

  if (hex.length === 4) {
    alpha = parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
    hex = hex.substring(0, 3);
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const num = parseInt(hex, 16);
  const red = num >> 16;
  const green = (num >> 8) & 255;
  const blue = num & 255;

  return options.format === 'array' ?
    [red, green, blue, alpha] :
    {red, green, blue, alpha};
}

function addAlphaToHex(hex, alpha) {
  const color = hexRgb(hex);
  return `rgba(${color.red}, ${color.green}, ${color.blue}, ${alpha})`;
}

export default function ReportHourlyBreakdown({
  title,
  startDate,
  endDate,
  space,

  data,
  dataStartTime,

  cellColorThreshold,
}) {
  const maxValue = Math.max.apply(Math, data.map(i => i.values).reduce((a, b) => [...a, ...b], []));
  return (
    <ReportWrapper
      title={title}
      startDate={startDate}
      endDate={endDate}
      spaces={[space.name]}
    >
      <ReportCard>
        <table className={styles.reportHourlyBreakdown}>
          <thead>
            <tr>
              <th> {/* always empty */} </th>
              {data.map(i => (
                <th key={i.date.format()}>
                  <span className={styles.headerLineOne}>{i.date.format('ddd')}</span>
                  <span className={styles.headerLineTwo}>{i.date.format('M/DD')}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(() => {
              const rows = [];
              for (let index = 0; index < Math.max.apply(Math, data.map(d => d.values.length)); index++) {
                const rowTime = dataStartTime.clone().add(index, 'hours');
                rows.push(
                  <tr key={index}>
                    <td>
                      {rowTime.hours() % 2 === 0 ? rowTime.format('ha').slice(0, -1) : null}
                    </td>
                    {data.map(d => (
                      <td
                        key={d.date.format()}
                        style={{
                          backgroundColor: addAlphaToHex(
                            colorVariables.brandPrimary,
                            0.1 + ((d.values[index] / maxValue) * 0.9)
                          ),
                          color: (d.values[index] / maxValue) < cellColorThreshold ? colorVariables.brandPrimary : '#fff',
                        }}
                      >
                        {d.values[index]}
                      </td>
                    ))}
                  </tr>
                );
              }
              return rows;
            })()}
          </tbody>
        </table>
      </ReportCard>
    </ReportWrapper>
  );
}
ReportHourlyBreakdown.propTypes = {
  title: propTypes.string.isRequired,
  startDate: propTypes.instanceOf(moment).isRequired,
  endDate: propTypes.instanceOf(moment).isRequired,
  space: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,

  data: propTypes.arrayOf(
    propTypes.shape({
      date: propTypes.instanceOf(moment).isRequired,
      values: propTypes.arrayOf(propTypes.number.isRequired).isRequired,
    }),
  ).isRequired,
  dataStartTime: propTypes.instanceOf(moment).isRequired,
};
ReportHourlyBreakdown.defaultProps = {
  cellColorThreshold: 0.25,
};
