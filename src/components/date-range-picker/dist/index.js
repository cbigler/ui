'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.END_DATE_ACTIVE = exports.START_DATE_ACTIVE = exports.ANCHOR_LEFT = exports.ANCHOR_RIGHT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = DateRangePicker;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDates = require('@density/react-dates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var ANCHOR_RIGHT = exports.ANCHOR_RIGHT = 'ANCHOR_RIGHT',
    ANCHOR_LEFT = exports.ANCHOR_LEFT = 'ANCHOR_LEFT',
    START_DATE_ACTIVE = exports.START_DATE_ACTIVE = 'startDate',
    END_DATE_ACTIVE = exports.END_DATE_ACTIVE = 'endDate';

function DateRangePicker(props) {
  var restProps = Object.assign({}, props);
  delete restProps.onChange;
  delete restProps.anchor;
  delete restProps.className;

  return React.createElement(
    'div',
    { className: (0, _classnames2.default)('date-range-picker', {
        'date-range-picker-anchor-left': !props.anchor || props.anchor === ANCHOR_LEFT,
        'date-range-picker-anchor-right': props.anchor === ANCHOR_RIGHT,
        'date-range-picker-focused': props.focusedInput
      }, props.className) },
    React.createElement(_reactDates.DateRangePicker, _extends({
      onDatesChange: props.onChange,
      customArrowIcon: React.createElement(
        'span',
        null,
        '\u2014'
      )
    }, restProps))
  );
}

