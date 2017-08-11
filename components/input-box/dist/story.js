'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');


var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('InputBox', module).addWithInfo('Empty', function () {
  return _react2.default.createElement(_index2.default, { type: 'text' });
}).addWithInfo('type=text', function () {
  return _react2.default.createElement(_index2.default, { type: 'text', value: 'foo!' });
}).addWithInfo('type=password', function () {
  return _react2.default.createElement(_index2.default, { type: 'password', placeholder: 'Type your password' });
}).addWithInfo('type=select', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'select' },
    _react2.default.createElement(
      'option',
      { value: 'foo' },
      'Foo'
    ),
    _react2.default.createElement(
      'option',
      { value: 'bar' },
      'Bar'
    ),
    _react2.default.createElement(
      'option',
      { value: 'baz' },
      'Baz'
    )
  );
}).addWithInfo('disabled box', function () {
  return _react2.default.createElement(_index2.default, { disabled: true, placeholder: 'I am disabled' });
});

