'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');


var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../button/index');

var _index4 = _interopRequireDefault(_index3);

var _card = require('../card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Modal', module).addWithInfo('With a card inside', function () {
  return _react2.default.createElement(
    'div',
    null,
    'foo',
    _react2.default.createElement(
      _index2.default,
      { onClickBackdrop: (0, _addonActions.action)('backdrop click') },
      _react2.default.createElement(
        _card2.default,
        { type: 'modal' },
        _react2.default.createElement(
          _card.CardHeader,
          null,
          'Confirmation'
        ),
        _react2.default.createElement(
          _card.CardBody,
          null,
          _react2.default.createElement(
            'p',
            { style: { margin: 0 } },
            'This token is for a thing. Lorem Ipsum is simply dummy text of the printing and typesetting industry and this is just here to make you believe in aliens.'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _index4.default,
            null,
            'Yes'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _index4.default,
            null,
            'No'
          )
        )
      )
    )
  );
}).addWithInfo('With a close button', function () {
  return _react2.default.createElement(
    'div',
    null,
    'foo',
    _react2.default.createElement(
      _index2.default,
      {
        onClickBackdrop: (0, _addonActions.action)('backdrop click'),
        onClose: (0, _addonActions.action)('close button click')
      },
      _react2.default.createElement(
        _card2.default,
        { type: 'modal' },
        _react2.default.createElement(
          _card.CardHeader,
          null,
          'Confirmation'
        ),
        _react2.default.createElement(
          _card.CardBody,
          null,
          _react2.default.createElement(
            'p',
            { style: { margin: 0 } },
            'This token is for a thing. Lorem Ipsum is simply dummy text of the printing and typesetting industry and this is just here to make you believe in aliens.'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _index4.default,
            null,
            'Yes'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _index4.default,
            null,
            'No'
          )
        )
      )
    )
  );
});

