'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');


var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Button', module).addWithInfo('Base button', function () {
  return _react2.default.createElement(
    _2.default,
    { onClick: (0, _addonActions.action)('Click!') },
    'Hello world!'
  );
}).addWithInfo('Small button', function () {
  return _react2.default.createElement(
    _2.default,
    { size: 'small' },
    'Hello world!'
  );
}).addWithInfo('Large button', function () {
  return _react2.default.createElement(
    _2.default,
    { size: 'large' },
    'Hello world!'
  );
}).addWithInfo('Disabled button', function () {
  return _react2.default.createElement(
    _2.default,
    { disabled: true },
    'Hello world!'
  );
});

