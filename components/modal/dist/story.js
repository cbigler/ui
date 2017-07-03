'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');


var _ = require('./');

var _2 = _interopRequireDefault(_);

var _card = require('../card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Modal', module).addWithInfo('With a card inside', function () {
  return _react2.default.createElement(
    'div',
    null,
    'foo',
    _react2.default.createElement(
      _2.default,
      { onClickBackdrop: (0, _addonActions.action)('backdrop click') },
      _react2.default.createElement(
        _card2.default,
        null,
        _react2.default.createElement(
          _card.CardHeader,
          null,
          'Foo'
        ),
        _react2.default.createElement(
          _card.CardBody,
          null,
          'Bar'
        )
      )
    )
  );
});

