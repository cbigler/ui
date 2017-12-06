'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.NavbarItem = NavbarItem;
exports.NavbarMobileItem = NavbarMobileItem;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.state = { open: false };
    return _this;
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          subtitle = _props.subtitle,
          fullWidth = _props.fullWidth,
          children = _props.children,
          mobileSidebar = _props.mobileSidebar,
          onClickSidebarButton = _props.onClickSidebarButton;


      var openSidebar = function openSidebar() {
        return _this2.setState({ open: true });
      };
      var closeSidebar = function closeSidebar() {
        return _this2.setState({ open: false });
      };

      return React.createElement(
        'div',
        { className: 'navbar' },
        React.createElement(
          'div',
          { className: fullWidth ? 'navbar-full-width' : 'navbar-container' },
          React.createElement(
            'div',
            { className: 'navbar-brand' },
            mobileSidebar || onClickSidebarButton ? React.createElement('button', {
              className: 'navbar-sidebar-button',
              onClick: function onClick() {
                return _this2.setState({ open: true }, function () {
                  return onClickSidebarButton ? onClickSidebarButton(true) : null;
                });
              }
            }) : null,
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
        ),
        React.createElement(
          'div',
          { className: (0, _classnames2.default)('navbar-mobile-sidebar', { open: this.state.open }) },
          React.createElement(
            'span',
            {
              role: 'button',
              className: 'navbar-mobile-sidebar-close-button',
              onClick: function onClick() {
                return _this2.setState({ open: false }, function () {
                  return onClickSidebarButton ? onClickSidebarButton(false) : null;
                });
              }
            },
            '\uE914'
          ),
          mobileSidebar ? mobileSidebar(closeSidebar, openSidebar).map(function (i, ct) {
            return React.createElement(
              'span',
              { key: ct },
              i
            );
          }) : null
        )
      );
    }
  }]);

  return Navbar;
}(React.Component);

exports.default = Navbar;
function NavbarItem(_ref) {
  var activePage = _ref.activePage,
      pageName = _ref.pageName,
      href = _ref.href,
      children = _ref.children,
      locked = _ref.locked,
      onClick = _ref.onClick;

  return React.createElement(
    'li',
    {
      className: (0, _classnames2.default)('navbar-item', {
        'navbar-item-active': pageName.indexOf(activePage) >= 0,
        'navbar-item-locked': locked
      }),
      onClick: onClick
    },
    locked ? React.createElement(
      'span',
      null,
      children
    ) : React.createElement(
      'a',
      { href: href },
      children
    )
  );
}

function NavbarMobileItem(_ref2) {
  var activePage = _ref2.activePage,
      pageName = _ref2.pageName,
      href = _ref2.href,
      children = _ref2.children,
      locked = _ref2.locked,
      indent = _ref2.indent,
      onClick = _ref2.onClick;

  return React.createElement(
    'li',
    {
      className: (0, _classnames2.default)('navbar-mobile-item', {
        'navbar-mobile-item-active': pageName.indexOf(activePage) >= 0,
        'navbar-mobile-item-locked': locked
      }),
      style: { paddingLeft: indent ? (indent - 1) * 10 : 0 },
      onClick: onClick
    },
    locked ? React.createElement(
      'span',
      null,
      children
    ) : React.createElement(
      'a',
      { href: href },
      children
    )
  );
}

