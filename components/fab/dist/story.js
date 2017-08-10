'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');


var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Fab', module).addWithInfo('With a &times; inside', function () {
  return _react2.default.createElement(
    _2.default,
    null,
    '\xD7'
  );
}).addWithInfo('With a plus inside', function () {
  return _react2.default.createElement(
    _2.default,
    null,
    '+'
  );
});

