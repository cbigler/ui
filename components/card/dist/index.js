'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Card;
exports.CardBody = CardBody;
exports.CardHeader = CardHeader;
exports.CardLoading = CardLoading;

var _uuid = require('uuid');

var uuid = _interopRequireWildcard(_uuid);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Card(_ref) {
  var type = _ref.type,
      className = _ref.className,
      children = _ref.children;

  return React.createElement(
    'div',
    {
      className: (0, _classnames2.default)('card', type ? 'card-' + type : null, className)
    },
    children
  );
}

function CardBody(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;

  return React.createElement(
    'div',
    { className: (0, _classnames2.default)('card-body', className) },
    children
  );
}

function CardHeader(_ref3) {
  var children = _ref3.children,
      size = _ref3.size,
      className = _ref3.className;

  return React.createElement(
    'div',
    { className: (0, _classnames2.default)('card-header', 'card-header-' + (size || 'base'), className) },
    children
  );
}

function CardLoading(_ref4) {
  var indeterminate = _ref4.indeterminate,
      percent = _ref4.percent,
      className = _ref4.className;

  return React.createElement('div', { className: (0, _classnames2.default)('card-loading', indeterminate ? 'card-loading-indeterminate' : null, className), style: { width: percent + '%' } });
}

