'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputStackItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.InputStackGroup = InputStackGroup;
exports.spec = spec;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _variables = require('./variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function InputStackGroup(props) {
  return React.createElement(
    'div',
    _extends({}, props, {
      className: (0, _classnames2.default)("input-stack-group", props.className)
    }),
    React.createElement(
      'div',
      null,
      props.children
    )
  );
}

var InputStackItem = exports.InputStackItem = function (_React$Component) {
  _inherits(InputStackItem, _React$Component);

  function InputStackItem(props) {
    _classCallCheck(this, InputStackItem);

    var _this = _possibleConstructorReturn(this, (InputStackItem.__proto__ || Object.getPrototypeOf(InputStackItem)).call(this, props));

    _this.state = { focused: false };
    return _this;
  }

  _createClass(InputStackItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var propsRest = Object.assign({}, this.props);
      delete propsRest.invalid;
      delete propsRest.focused;
      delete propsRest.className;

      return React.createElement(
        'div',
        { className: (0, _classnames2.default)('input-stack-item', this.props.invalid ? 'input-stack-item-invalid' : null, this.state.focused ? 'focus' : null, this.props.className) },
        React.createElement('input', _extends({}, propsRest, {
          onFocus: function onFocus(data) {
            _this2.setState({ focused: true });
            _this2.props.onFocus && _this2.props.onFocus(data);
          },
          onBlur: function onBlur(data) {
            _this2.setState({ focused: false });
            _this2.props.onBlur && _this2.props.onBlur(data);
          }
        }))
      );
    }
  }]);

  return InputStackItem;
}(React.Component);

// Render the spec with this data.


function spec() {
  return React.createElement(
    InputStackGroup,
    null,
    React.createElement(InputStackItem, { type: 'text', placeholder: 'Text box' }),
    React.createElement(InputStackItem, { invalid: true, type: 'text', value: 'I\'m invalid :(' }),
    React.createElement(InputStackItem, { type: 'password', placeholder: 'Another password box' })
  );
}

