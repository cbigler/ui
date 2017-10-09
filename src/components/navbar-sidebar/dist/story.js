'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');


var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../button/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

;

(0, _react3.storiesOf)('NavbarSidebar', module).addWithInfo('A sticky sidebar', function () {
  return _react2.default.createElement(
    _index2.default,
    { show: true },
    _react2.default.createElement(
      _index.NavbarSidebarItem,
      { header: true, activePage: 'active', pageName: 'foo', href: '#/foo' },
      'Foo!'
    ),
    _react2.default.createElement(
      _index.NavbarSidebarItem,
      { activePage: 'active', pageName: 'foo', href: '#/foo' },
      'Foo!'
    ),
    _react2.default.createElement(
      _index.NavbarSidebarItem,
      { activePage: 'active', pageName: 'active', href: '#/active' },
      'Active!'
    )
  );
}).addWithInfo('An interactive sidebar', function () {
  var SidebarWrapped = function (_React$Component) {
    _inherits(SidebarWrapped, _React$Component);

    function SidebarWrapped(props) {
      _classCallCheck(this, SidebarWrapped);

      var _this = _possibleConstructorReturn(this, (SidebarWrapped.__proto__ || Object.getPrototypeOf(SidebarWrapped)).call(this, props));

      _this.state = { show: false };
      return _this;
    }

    _createClass(SidebarWrapped, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _index4.default,
            { style: { marginLeft: 400 }, onClick: function onClick() {
                return _this2.setState({ show: !_this2.state.show });
              } },
            'Toggle'
          ),
          _react2.default.createElement(
            _index2.default,
            { show: this.state.show },
            _react2.default.createElement(
              _index.NavbarSidebarItem,
              { header: true, activePage: 'active', pageName: 'foo', href: '#/foo' },
              'Foo!'
            ),
            _react2.default.createElement(
              _index.NavbarSidebarItem,
              { activePage: 'active', pageName: 'foo', href: '#/foo' },
              'Foo!'
            ),
            _react2.default.createElement(
              _index.NavbarSidebarItem,
              { activePage: 'active', pageName: 'active', href: '#/active' },
              'Active!'
            )
          )
        );
      }
    }]);

    return SidebarWrapped;
  }(_react2.default.Component);

  return _react2.default.createElement(SidebarWrapped, null);
});

