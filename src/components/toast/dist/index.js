'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Toast;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Toast(_ref) {
  var icon = _ref.icon,
      type = _ref.type,
      className = _ref.className,
      children = _ref.children;

  return React.createElement(
    'div',
    { className: (0, _classnames2.default)('toast', type ? 'toast-' + type : null, className) },
    React.createElement(
      'div',
      { className: 'toast-icon' },
      icon
    ),
    React.createElement(
      'div',
      { className: 'toast-body' },
      React.createElement(
        'span',
        null,
        children
      )
    )
  );
}

