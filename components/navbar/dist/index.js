
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Navbar(_ref) {
  var subtitle = _ref.subtitle;

  return React.createElement(
    "div",
    { className: "navbar" },
    React.createElement(
      "div",
      { className: "navbar-brand" },
      React.createElement("img", {
        src: "http://style-guide.density.io/assets/images/app_bar_logo.png",
        alt: "Density Logo"
      })
    ),
    subtitle ? React.createElement(
      "div",
      { className: "navbar-brand-subtitle" },
      subtitle
    ) : null
  );
}

