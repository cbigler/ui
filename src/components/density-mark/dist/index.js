'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DensityMark;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function DensityMark(_ref) {
  var className = _ref.className;

  return React.createElement(
    'div',
    { className: (0, _classnames2.default)('density-mark', className) },
    React.createElement(
      'svg',
      { version: '1.1', x: '0px', y: '0px', viewBox: '0 0 211 216.5' },
      React.createElement('path', { d: 'M84.9,119.8c4.5-2.7,8.3-6.5,10.9-11c2.8-4.7,4.4-10.2,4.4-16.1v-21c0-1.1,0.9-2,2-2h9.5c1.1,0,2,0.9,2,2v21 c0,5.9,1.6,11.4,4.4,16.1c2.7,4.5,6.4,8.3,10.9,11l18.7,10.8c1,0.6,1.3,1.8,0.7,2.7l-4.7,8.2c-0.6,1-1.8,1.3-2.7,0.7l-18.3-10.6 c-4.6-2.6-10-4.1-15.7-4.1c-5.7,0-11,1.5-15.7,4.1l-18.3,10.6c-1,0.6-2.2,0.2-2.7-0.7l-4.7-8.2c-0.6-1-0.2-2.2,0.7-2.7L84.9,119.8z'
      })
    )
  );
}

