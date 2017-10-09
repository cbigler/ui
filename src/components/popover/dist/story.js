'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');


var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../card/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _react3.storiesOf)('Popover', module).addWithInfo('A popover', function () {
  return _react2.default.createElement(
    _index2.default,
    { show: true, popover: _react2.default.createElement(
        _index4.default,
        null,
        _react2.default.createElement(
          _index3.CardBody,
          null,
          _react2.default.createElement(
            'p',
            null,
            'Hello World! Lorem ipsum dolar set amet.'
          )
        )
      ) },
    _react2.default.createElement('button', _defineProperty({ style: { width: 150, height: 10 } }, 'style', { opacity: 0, display: 'block' }))
  );
}).addWithInfo('Popover that works', function () {
  var PopoverClick = function (_React$Component) {
    _inherits(PopoverClick, _React$Component);

    function PopoverClick(props) {
      _classCallCheck(this, PopoverClick);

      var _this = _possibleConstructorReturn(this, (PopoverClick.__proto__ || Object.getPrototypeOf(PopoverClick)).call(this, props));

      _this.state = { show: false };
      return _this;
    }

    _createClass(PopoverClick, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          _index2.default,
          {
            show: this.state.show,
            popover: _react2.default.createElement(
              _index4.default,
              null,
              _react2.default.createElement(
                _index3.CardBody,
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  'Hello World!'
                )
              )
            ),
            onDismiss: function onDismiss() {
              return _this2.setState({ show: false });
            }
          },
          _react2.default.createElement(
            'button',
            {
              onClick: function onClick() {
                return _this2.setState({ show: !_this2.state.show });
              },
              style: { width: 200, height: 50 }
            },
            'Foo'
          )
        );
      }
    }]);

    return PopoverClick;
  }(_react2.default.Component);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(PopoverClick, null)
      )
    ),
    _react2.default.createElement('div', { style: { background: 'red', width: 200, height: 200 } })
  );
}).addWithInfo('Popover with ref target works', function () {
  var PopoverClick = function (_React$Component2) {
    _inherits(PopoverClick, _React$Component2);

    function PopoverClick(props) {
      _classCallCheck(this, PopoverClick);

      var _this3 = _possibleConstructorReturn(this, (PopoverClick.__proto__ || Object.getPrototypeOf(PopoverClick)).call(this, props));

      _this3.state = { show: false };
      return _this3;
    }

    _createClass(PopoverClick, [{
      key: 'render',
      value: function render() {
        var _this4 = this;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            {
              style: { width: 200, height: 50 },
              onClick: function onClick() {
                return _this4.setState({ show: !_this4.state.show });
              }
            },
            'Open Popover'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            {
              ref: function ref(_ref) {
                return _this4.myRef = _ref;
              }
            },
            'Popover target'
          ),
          _react2.default.createElement(_index2.default, {
            show: this.state.show,
            popover: _react2.default.createElement(
              _index4.default,
              null,
              _react2.default.createElement(
                _index3.CardBody,
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  'Hello World!'
                )
              )
            ),
            target: this.myRef,
            onDismiss: function onDismiss() {
              return _this4.setState({ show: false });
            }
          })
        );
      }
    }]);

    return PopoverClick;
  }(_react2.default.Component);

  return _react2.default.createElement(PopoverClick, null);
}).addWithInfo('Wider popover with header that works', function () {
  var PopoverClick = function (_React$Component3) {
    _inherits(PopoverClick, _React$Component3);

    function PopoverClick(props) {
      _classCallCheck(this, PopoverClick);

      var _this5 = _possibleConstructorReturn(this, (PopoverClick.__proto__ || Object.getPrototypeOf(PopoverClick)).call(this, props));

      _this5.state = { show: false };
      return _this5;
    }

    _createClass(PopoverClick, [{
      key: 'render',
      value: function render() {
        var _this6 = this;

        return _react2.default.createElement(
          _index2.default,
          {
            show: this.state.show,
            popover: _react2.default.createElement(
              _index4.default,
              null,
              _react2.default.createElement(
                _index3.CardHeader,
                null,
                'Foo'
              ),
              _react2.default.createElement(
                _index3.CardBody,
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                )
              )
            ),
            onDismiss: function onDismiss() {
              return _this6.setState({ show: false });
            }
          },
          _react2.default.createElement(
            'button',
            {
              onClick: function onClick() {
                return _this6.setState({ show: !_this6.state.show });
              },
              style: { width: 200, height: 50 }
            },
            'Foo'
          )
        );
      }
    }]);

    return PopoverClick;
  }(_react2.default.Component);

  return _react2.default.createElement(PopoverClick, null);
});

