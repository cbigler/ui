'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');


var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('PagerButtonGroup', module).addWithInfo('Default view', function () {
  return _react2.default.createElement(_index2.default, null);
}).addWithInfo('First and last buttons', function () {
  return _react2.default.createElement(_index2.default, { showFirstLastButtons: true });
}).addWithInfo('Click handlers', function () {
  return _react2.default.createElement(_index2.default, {
    showFirstLastButtons: true,
    onClickNext: (0, _addonActions.action)('next'),
    onClickPrevious: (0, _addonActions.action)('previous'),
    onClickStart: (0, _addonActions.action)('start'),
    onClickEnd: (0, _addonActions.action)('end')
  });
}).addWithInfo('Disabled buttons', function () {
  return _react2.default.createElement(_index2.default, {
    showFirstLastButtons: true,

    disabledNext: true,
    disabledStart: true,
    disabledPrevious: true,
    disabledEnd: false,

    onClickNext: (0, _addonActions.action)('next'),
    onClickPrevious: (0, _addonActions.action)('previous'),
    onClickStart: (0, _addonActions.action)('start'),
    onClickEnd: (0, _addonActions.action)('end')
  });
});

