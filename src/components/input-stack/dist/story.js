'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');


var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('InputStack', module).addWithInfo('With a bunch of text and password inputs', function () {
  return _react2.default.createElement(
    _index.InputStackGroup,
    null,
    _react2.default.createElement(_index.InputStackItem, { type: 'text', placeholder: 'Text box' }),
    _react2.default.createElement(_index.InputStackItem, { type: 'password', placeholder: 'Password box' }),
    _react2.default.createElement(_index.InputStackItem, { type: 'password', placeholder: 'Another password box' })
  );
}).addWithInfo('With a an invalid input', function () {
  return _react2.default.createElement(
    _index.InputStackGroup,
    null,
    _react2.default.createElement(_index.InputStackItem, { type: 'text', placeholder: 'Text box' }),
    _react2.default.createElement(_index.InputStackItem, { invalid: true, type: 'text', value: 'I\'m invalid :(' }),
    _react2.default.createElement(_index.InputStackItem, { type: 'password', placeholder: 'Another password box' })
  );
}).addWithInfo('With a single input', function () {
  return _react2.default.createElement(
    _index.InputStackGroup,
    null,
    _react2.default.createElement(_index.InputStackItem, { type: 'text', placeholder: 'What\'s your name?' })
  );
});

