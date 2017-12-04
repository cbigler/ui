'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');


var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('RadioButton', module).addWithInfo('Two radio buttons', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_2.default, { text: 'Foo', onChange: (0, _addonActions.action)('Foo changed!') }),
    _react2.default.createElement(_2.default, { text: 'Bar', onChange: (0, _addonActions.action)('Bar changed!') })
  );
}).addWithInfo('Two radio buttons, one locked on, one locked off', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_2.default, { text: 'Foo', checked: true }),
    _react2.default.createElement(_2.default, { text: 'Bar', checked: false })
  );
});

