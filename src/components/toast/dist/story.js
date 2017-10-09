'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');


var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Toast', module).addWithInfo('With multiline content', function () {
  return _react2.default.createElement(
    _index2.default,
    { icon: _react2.default.createElement(
        'span',
        null,
        '\u24D8'
      ) },
    'To link a doorway with a space, drag the doorway from below to a space on the left.'
  );
}).addWithInfo('Success', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'success', icon: _react2.default.createElement(
        'span',
        null,
        '\u2714'
      ) },
    'To link a doorway with a space, drag the doorway from below to a space on the left.'
  );
}).addWithInfo('info', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'info', icon: _react2.default.createElement(
        'span',
        null,
        '\u2714'
      ) },
    'To link a doorway with a space, drag the doorway from below to a space on the left.'
  );
}).addWithInfo('Warning', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'warning', icon: _react2.default.createElement(
        'span',
        null,
        '\xD7'
      ) },
    'To link a doorway with a space, drag the doorway from below to a space on the left.'
  );
}).addWithInfo('Danger', function () {
  return _react2.default.createElement(
    _index2.default,
    { type: 'danger', icon: _react2.default.createElement(
        'span',
        null,
        '\u2620'
      ) },
    'Danger danger, Mr. Ranger!'
  );
});

