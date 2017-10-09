'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');


var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _react3.storiesOf)('DateRangePicker', module).addWithInfo('Open, start date selected', function () {
  return _react2.default.createElement(_index2.default, {
    onChange: (0, _addonActions.action)('dates change'),
    onFocusChange: (0, _addonActions.action)('focus'),
    focusedInput: _index.START_DATE_ACTIVE,
    startDate: _moment2.default.utc(),
    endDate: _moment2.default.utc().subtract(1, 'day')
  });
}).addWithInfo('Flaoted right', function () {
  return _react2.default.createElement(
    'div',
    { style: { paddingLeft: 400, width: 400 } },
    _react2.default.createElement(_index2.default, {
      anchor: _index.ANCHOR_RIGHT,
      onChange: (0, _addonActions.action)('dates change'),
      onFocusChange: (0, _addonActions.action)('focus'),
      focusedInput: _index.START_DATE_ACTIVE,
      startDate: _moment2.default.utc(),
      endDate: _moment2.default.utc().subtract(1, 'day')
    })
  );
}).addWithInfo('Interactive', function () {
  var Wrapper = function (_React$Component) {
    _inherits(Wrapper, _React$Component);

    function Wrapper(props) {
      _classCallCheck(this, Wrapper);

      var _this = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props));

      _this.state = {
        focus: null,
        startDate: _moment2.default.utc(),
        endDate: _moment2.default.utc().add(1, 'day')
      };
      return _this;
    }

    _createClass(Wrapper, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(_index2.default, {
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          onChange: function onChange(e) {
            return _this2.setState({ startDate: e.startDate, endDate: e.endDate });
          },

          focusedInput: this.state.focus,
          onFocusChange: function onFocusChange(focus) {
            return _this2.setState({ focus: focus });
          }
        });
      }
    }]);

    return Wrapper;
  }(_react2.default.Component);

  return _react2.default.createElement(Wrapper, null);
});

