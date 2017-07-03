
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Modal(_ref) {
  var children = _ref.children,
      onClickBackdrop = _ref.onClickBackdrop;

  return React.createElement(
    "div",
    { className: "modal-backdrop", onClick: onClickBackdrop },
    React.createElement(
      "div",
      { className: "modal", onClick: function onClick(e) {
          return e.stopPropagation();
        } },
      children
    )
  );
}

