'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;
exports.NavbarItem = NavbarItem;

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Navbar(_ref) {
  var subtitle = _ref.subtitle,
      fullWidth = _ref.fullWidth,
      children = _ref.children,
      onClickSidebarButton = _ref.onClickSidebarButton;

  return React.createElement(
    'div',
    { className: 'navbar' },
    React.createElement(
      'div',
      { className: fullWidth ? 'navbar-full-width' : 'navbar-container' },
      React.createElement(
        'div',
        { className: 'navbar-brand' },
        onClickSidebarButton ? React.createElement(
          'button',
          {
            className: 'navbar-sidebar-button',
            onClick: onClickSidebarButton
          },
          '='
        ) : null,
        React.createElement('img', {
          src: 'http://style-guide.density.io/assets/images/app_bar_logo.png',
          alt: 'Density Logo'
        })
      ),
      subtitle ? React.createElement(
        'div',
        { className: 'navbar-brand-subtitle' },
        subtitle
      ) : null,
      React.createElement(
        'div',
        { className: 'navbar-items' },
        children
      )
    )
  );
}

function NavbarItem(_ref2) {
  var activePage = _ref2.activePage,
      pageName = _ref2.pageName,
      href = _ref2.href,
      children = _ref2.children;

  return React.createElement(
    'li',
    { className: pageName.indexOf(activePage) >= 0 ? 'navbar-item-active' : 'navbar-item' },
    React.createElement(
      'a',
      { href: href },
      children
    )
  );
}

