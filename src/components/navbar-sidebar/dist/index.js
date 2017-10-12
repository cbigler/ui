'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavbarSidebar;
exports.NavbarSidebarItem = NavbarSidebarItem;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function NavbarSidebar(_ref) {
  var show = _ref.show,
      children = _ref.children;

  return React.createElement(
    'ul',
    { className: (0, _classnames2.default)('navbar-sidebar', show ? 'visible' : null) },
    children
  );
}

function NavbarSidebarItem(_ref2) {
  var activePage = _ref2.activePage,
      pageName = _ref2.pageName,
      href = _ref2.href,
      header = _ref2.header,
      onClick = _ref2.onClick,
      children = _ref2.children;

  var type = header ? 'item-header' : 'item';
  return React.createElement(
    'li',
    { onClick: onClick, className: pageName.indexOf(activePage) >= 0 ? 'navbar-sidebar-' + type + '-active' : 'navbar-sidebar-' + type },
    React.createElement(
      'a',
      { href: href },
      children
    )
  );
}

