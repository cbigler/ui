'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _popper = require('popper.js');

var _popper2 = _interopRequireDefault(_popper);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popover = function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover(props) {
    _classCallCheck(this, Popover);

    return _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));
  }

  // When anything else other than the popover is clicked, close the popover.


  _createClass(Popover, [{
    key: 'initializeBackgroundClickHandler',
    value: function initializeBackgroundClickHandler() {
      var _this2 = this;

      this.closePopover = function (event) {
        var oldId = event.target.id;
        event.target.id = 'popover-close-reference';

        if (_this2.props.show && _this2.props.onDismiss) {
          var clickedInsidePopover = document.querySelector('.popover-wrapper #popover-close-reference');
          if (!clickedInsidePopover) {
            _this2.props.onDismiss();
          }
        }

        event.target.id = oldId;
      };
      window.addEventListener('click', this.closePopover, false);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // FIXME: A bit of a hack. Popper doesn't work well in a testing environment (a lack of
      // `document.createRange`: https://github.com/tmpvar/jsdom/issues/317) so in a testing
      // environment popper isn't used (and since the component is never rendered to a screen when
      // testing, I think this is fine.)
      if (process.env.NODE_ENV === 'test') {
        this.popper = null;
        return;
      }

      this.popper = new _popper2.default(this.wrapper, this.popover, {
        modifiers: {
          arrow: {
            enabled: true,
            element: ".popover-arrow"
          }
        }
      });
    }

    // After an update, bind a click listener to window to listen for click events outside the
    // popover. If one is recieved, call `this.props.onDismiss`.

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}

    // If the popover click handler is still bound, then remove it prior to unmounting the component.

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.closePopover) {
        window.removeEventListener('click', this.closePopover);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      // On every render, update the popover position.
      this.popper && this.popper.scheduleUpdate();

      // On every render, add a click handler to the the body element to listen for out of bounds
      // click events.
      if (this.props.show && !this.closePopover) {
        setTimeout(function () {
          _this3.initializeBackgroundClickHandler.apply(_this3);
        }, 100);
      } else if (this.closePopover) {
        window.removeEventListener('click', this.closePopover);
        delete this.closePopover;
      }

      return React.createElement(
        'div',
        { className: 'popover-wrapper', ref: function ref(_ref2) {
            return _this3.wrapper = _this3.props.target || _ref2;
          } },
        this.props.children,
        React.createElement(
          'div',
          {
            className: (0, _classnames2.default)('popover', this.props.className),
            ref: function ref(_ref) {
              return _this3.popover = _ref;
            },
            style: { display: this.props.show ? 'block' : 'none' }
          },
          React.createElement('div', { className: 'popover-arrow' }),
          this.props.popover
        )
      );
    }
  }]);

  return Popover;
}(React.Component);

exports.default = Popover;

