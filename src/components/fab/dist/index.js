'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Fab;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Fab(_ref) {
  var type = _ref.type,
      className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children;

  return React.createElement(
    'div',
    {
      onClick: onClick,
      className: (0, _classnames2.default)(type ? 'fab-' + type : 'fab', className)
    },
    children
  );
}

