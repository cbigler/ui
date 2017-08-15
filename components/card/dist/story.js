'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _react2 = require('@storybook/react');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../button/index');

var _index4 = _interopRequireDefault(_index3);

var _indicatorDot = require('../indicator-dot');

var _indicatorDot2 = _interopRequireDefault(_indicatorDot);


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _react2.storiesOf)('Card', module).addWithInfo('Card', function () {
  return React.createElement(
    _index2.default,
    null,
    React.createElement(
      _index.CardBody,
      null,
      React.createElement(
        'p',
        null,
        'Hello World!'
      )
    )
  );
}).addWithInfo('Card Modal', function () {
  return React.createElement(
    _index2.default,
    { type: 'modal' },
    React.createElement(
      _index.CardHeader,
      null,
      'Confirmation'
    ),
    React.createElement(
      _index.CardBody,
      null,
      React.createElement(
        'p',
        { style: { margin: 0 } },
        'This token is for a thing. Lorem Ipsum is simply dummy text of the printing and typesetting industry and this is just here to make you believe in aliens.'
      ),
      React.createElement('br', null),
      React.createElement(
        _index4.default,
        null,
        'Yes'
      ),
      React.createElement('br', null),
      React.createElement(
        _index4.default,
        null,
        'No'
      )
    )
  );
}).addWithInfo('Card Small Header', function () {
  return React.createElement(
    _index2.default,
    null,
    React.createElement(
      _index.CardHeader,
      { size: 'small' },
      'Greeter'
    ),
    React.createElement(
      _index.CardBody,
      null,
      React.createElement(
        'p',
        null,
        'Hello World!'
      )
    )
  );
}).addWithInfo('Loading Card', function () {
  return React.createElement(
    _index2.default,
    null,
    React.createElement(_index.CardLoading, { percent: 50 }),
    React.createElement(
      _index.CardBody,
      null,
      React.createElement(
        'p',
        null,
        'Hello World!'
      )
    )
  );
}).addWithInfo('Indeterminate Loading Card', function () {
  return React.createElement(
    _index2.default,
    null,
    React.createElement(_index.CardLoading, { indeterminate: true }),
    React.createElement(
      _index.CardBody,
      null,
      React.createElement(
        'p',
        null,
        'Hello World!'
      )
    )
  );
}).addWithInfo('Dark Card', function () {
  return React.createElement(
    _index2.default,
    { type: 'dark' },
    React.createElement(
      _index.CardBody,
      null,
      React.createElement(
        'p',
        null,
        'Hello World!'
      )
    )
  );
}).addWithInfo('Real example', function () {
  var RealExample = function (_React$Component) {
    _inherits(RealExample, _React$Component);

    function RealExample(props) {
      _classCallCheck(this, RealExample);

      var _this = _possibleConstructorReturn(this, (RealExample.__proto__ || Object.getPrototypeOf(RealExample)).call(this, props));

      _this.state = { loaded: 0 };

      setTimeout(function () {
        _this.setState({ loaded: 50 });
      }, 1000);
      setTimeout(function () {
        _this.setState({ loaded: 100 });
      }, 1500);
      setTimeout(function () {
        _this.setState({ loaded: 0 });
      }, 2000);
      return _this;
    }

    _createClass(RealExample, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          _index2.default,
          null,
          React.createElement(_index.CardLoading, { percent: this.state.loaded }),
          React.createElement(
            _index.CardHeader,
            null,
            React.createElement(
              'div',
              { style: { display: 'flex' } },
              React.createElement(
                'span',
                { style: { flex: 1 } },
                'Greeter'
              ),
              React.createElement(_indicatorDot2.default, { style: { marginTop: 4 }, type: 'success', label: 'Looks peachy' })
            ),
            React.createElement(
              'div',
              { style: { display: 'flex', marginTop: 12, fontSize: 12, color: '#B4B8BF' } },
              React.createElement(
                'span',
                { style: { flex: 1 } },
                'Subtitle'
              ),
              React.createElement(
                'span',
                null,
                'Type'
              )
            )
          ),
          React.createElement(
            _index.CardBody,
            null,
            React.createElement(
              'p',
              null,
              'Hello World!'
            )
          )
        );
      }
    }]);

    return RealExample;
  }(React.Component);

  return React.createElement(RealExample, null);
});

