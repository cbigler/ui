'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = InputBox;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function InputBox(props) {
  switch (props.type) {
    // Selects need a custom class added to them so that they'll hide the caret and add some padding
    // to the right.
    case 'select':
      return React.createElement('select', _extends({}, props, {
        className: (0, _classnames2.default)('input-box', 'input-box-select', props.disabled ? 'input-box-disabled' : null, props.className)
      }));
    default:
      return React.createElement('input', _extends({}, props, {
        className: (0, _classnames2.default)('input-box', props.disabled ? 'input-box-disabled' : null, props.className)
      }));
  }
}

