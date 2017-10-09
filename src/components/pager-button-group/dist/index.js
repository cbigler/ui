'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PagerButtonGroup;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function PagerButtonGroup(_ref) {
  var showFirstLastButtons = _ref.showFirstLastButtons,
      disabledPrevious = _ref.disabledPrevious,
      disabledNext = _ref.disabledNext,
      disabledStart = _ref.disabledStart,
      disabledEnd = _ref.disabledEnd,
      onClickPrevious = _ref.onClickPrevious,
      onClickNext = _ref.onClickNext,
      onClickStart = _ref.onClickStart,
      onClickEnd = _ref.onClickEnd;

  return React.createElement(
    'div',
    { className: 'pager-button-group' },
    showFirstLastButtons ? React.createElement(
      'div',
      {
        className: (0, _classnames2.default)('pager-button', { disabled: disabledStart }),
        onClick: function onClick(e) {
          if (!disabledStart) {
            onClickStart(e);
          }
        }
      },
      '\xAB'
    ) : null,
    React.createElement(
      'div',
      {
        className: (0, _classnames2.default)('pager-button', { disabled: disabledPrevious }),
        onClick: function onClick(e) {
          if (!disabledPrevious) {
            onClickPrevious(e);
          }
        }
      },
      '\u2039'
    ),
    React.createElement(
      'div',
      {
        className: (0, _classnames2.default)('pager-button', { disabled: disabledNext }),
        onClick: function onClick(e) {
          if (!disabledNext) {
            onClickNext(e);
          }
        }
      },
      '\u203A'
    ),
    showFirstLastButtons ? React.createElement(
      'div',
      {
        className: (0, _classnames2.default)('pager-button', { disabled: disabledEnd }),
        onClick: function onClick(e) {
          if (!disabledEnd) {
            onClickEnd(e);
          }
        }
      },
      '\xBB'
    ) : null
  );
}

