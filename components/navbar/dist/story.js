'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');


var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Navbar', module).addWithInfo('Navigation Bar', function () {
  return _react2.default.createElement(
    'div',
    { className: 'full-width' },
    _react2.default.createElement(_2.default, null)
  );
}).addWithInfo('With label', function () {
  return _react2.default.createElement(
    'div',
    { className: 'full-width' },
    _react2.default.createElement(_2.default, { subtitle: 'Dashboard' })
  );
});

