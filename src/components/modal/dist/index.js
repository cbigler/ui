'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Modal(_ref) {
  var children = _ref.children,
      onClickBackdrop = _ref.onClickBackdrop,
      onClick = _ref.onClick,
      onClose = _ref.onClose;

  return React.createElement(
    'div',
    {
      className: (0, _classnames2.default)('modal-backdrop', {}),
      onClick: onClickBackdrop
    },
    React.createElement(
      'div',
      {
        className: 'modal',
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      },
      onClose ? React.createElement(
        'div',
        { className: 'modal-close', onClick: onClose },
        '\u2715'
      ) : null,
      children
    )
  );
}

