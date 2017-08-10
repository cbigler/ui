'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContextMenu;
exports.ContextMenuItem = ContextMenuItem;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function ContextMenu(_ref) {
  var className = _ref.className,
      children = _ref.children;

  return React.createElement(
    'div',
    { className: (0, _classnames2.default)('context-menu', className) },
    children
  );
}

function ContextMenuItem(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      onClick = _ref2.onClick;

  return React.createElement(
    'div',
    { onClick: onClick, className: (0, _classnames2.default)('context-menu-item', className) },
    children
  );
}

