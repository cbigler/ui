'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RadioButton;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _uuid = require('uuid');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function RadioButton(_ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange,
      text = _ref.text;

  var unique = (0, _uuid.v4)();
  return React.createElement(
    'div',
    { className: 'radio-button' },
    React.createElement('input', {
      type: 'radio',
      id: 'radio-button-' + unique,
      onChange: onChange,
      checked: checked
    }),
    React.createElement(
      'label',
      { htmlFor: 'radio-button-' + unique },
      text
    )
  );
}

