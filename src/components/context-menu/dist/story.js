'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');


var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('ContextMenu', module).addWithInfo('With icons', function () {
  return _react2.default.createElement(
    _2.default,
    null,
    _react2.default.createElement(
      _.ContextMenuItem,
      null,
      _react2.default.createElement('img', { src: 'http://i.imgur.com/ssuaPQs.png', style: { height: 16 } }),
      'Foo'
    ),
    _react2.default.createElement(
      _.ContextMenuItem,
      null,
      _react2.default.createElement('img', { src: 'http://i.imgur.com/ssuaPQs.png', style: { height: 16 } }),
      'Bar'
    ),
    _react2.default.createElement(
      _.ContextMenuItem,
      null,
      _react2.default.createElement('img', { src: 'http://i.imgur.com/ssuaPQs.png', style: { height: 16 } }),
      'Baz'
    )
  );
}).addWithInfo('Without icons', function () {
  return _react2.default.createElement(
    _2.default,
    null,
    _react2.default.createElement(
      _.ContextMenuItem,
      null,
      'Foo'
    ),
    _react2.default.createElement(
      _.ContextMenuItem,
      null,
      'Bar'
    ),
    _react2.default.createElement(
      _.ContextMenuItem,
      null,
      'Baz'
    )
  );
});

