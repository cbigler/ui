'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');


var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('IndicatorDot', module).addWithInfo('Default', function () {
  return _react2.default.createElement(_2.default, { content: 'foo', label: 'I know nothing' });
}).addWithInfo('All Good!', function () {
  return _react2.default.createElement(_2.default, { type: 'success', label: 'Sleeping on a bed of clouds' });
}).addWithInfo('Not so Good...', function () {
  return _react2.default.createElement(_2.default, { type: 'danger', label: 'Explosions everywhere' });
}).addWithInfo('Primary colored', function () {
  return _react2.default.createElement(_2.default, { type: 'primary', label: 'I\'m out of funny phrases' });
}).addWithInfo('No label', function () {
  return _react2.default.createElement(_2.default, { type: 'primary' });
});

