'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');


var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Navbar', module).addWithInfo('Navigation Bar', function () {
  return _react2.default.createElement(
    'div',
    { className: 'full-width' },
    _react2.default.createElement(_index2.default, null)
  );
}).addWithInfo('With label', function () {
  return _react2.default.createElement(
    'div',
    { className: 'full-width' },
    _react2.default.createElement(_index2.default, { subtitle: 'Dashboard' })
  );
}).addWithInfo('With items', function () {
  return _react2.default.createElement(
    'div',
    { className: 'full-width' },
    _react2.default.createElement(
      _index2.default,
      null,
      _react2.default.createElement(
        _index.NavbarItem,
        {
          activePage: 'active-page',
          pageName: ['inactive-page'],
          href: 'https://example.com'
        },
        'Inactive navbar item'
      ),
      _react2.default.createElement(
        _index.NavbarItem,
        {
          activePage: 'active-page',
          pageName: ['active-page'],
          href: 'https://example.com'
        },
        'Active navbar item'
      ),
      _react2.default.createElement(
        _index.NavbarItem,
        {
          activePage: 'active-page',
          pageName: ['locked-page'],
          locked: true,
          href: 'https://example.com'
        },
        'Locked navbar item'
      )
    )
  );
}).addWithInfo('With items and mobile sidebar', function () {
  return _react2.default.createElement(
    'div',
    { className: 'full-width' },
    _react2.default.createElement(
      _index2.default,
      { mobileSidebar: function mobileSidebar(onCloseSidebar, onOpenSidebar) {
          return [_react2.default.createElement(
            _index.NavbarMobileItem,
            {
              activePage: 'active-page',
              pageName: ['inactive-page'],
              href: 'https://example.com',
              onClick: onCloseSidebar
            },
            'Inactive navbar item'
          ), _react2.default.createElement(
            _index.NavbarMobileItem,
            {
              activePage: 'active-page',
              pageName: ['active-page'],
              href: 'https://example.com',
              indent: 2,
              onClick: onCloseSidebar
            },
            'Active indented navbar item'
          ), _react2.default.createElement(
            _index.NavbarMobileItem,
            {
              activePage: 'active-page',
              pageName: ['locked-page'],
              locked: true,
              href: 'https://example.com',
              onClick: onCloseSidebar
            },
            'Locked navbar item'
          ), _react2.default.createElement(
            _index.NavbarMobileItem,
            {
              activePage: 'active-page',
              pageName: ['inactive-page'],
              href: 'https://example.com',
              onClick: onCloseSidebar
            },
            'Inactive navbar item'
          ), _react2.default.createElement(
            _index.NavbarMobileItem,
            {
              activePage: 'active-page',
              pageName: ['inactive-page'],
              href: 'https://example.com',
              indent: 2,
              onClick: onCloseSidebar
            },
            'One'
          ), _react2.default.createElement(
            _index.NavbarMobileItem,
            {
              activePage: 'active-page',
              pageName: ['inactive-page'],
              href: 'https://example.com',
              indent: 2,
              onClick: onCloseSidebar
            },
            'Two'
          )];
        } },
      _react2.default.createElement(
        _index.NavbarItem,
        {
          activePage: 'active-page',
          pageName: ['inactive-page'],
          href: 'https://example.com'
        },
        'Inactive navbar item'
      ),
      _react2.default.createElement(
        _index.NavbarItem,
        {
          activePage: 'active-page',
          pageName: ['active-page'],
          href: 'https://example.com'
        },
        'Active navbar item'
      ),
      _react2.default.createElement(
        _index.NavbarItem,
        {
          activePage: 'active-page',
          pageName: ['locked-page'],
          locked: true,
          href: 'https://example.com'
        },
        'Locked navbar item'
      )
    )
  );
}).addWithInfo('With full width', function () {
  return _react2.default.createElement(
    'div',
    { className: 'full-width' },
    _react2.default.createElement(_index2.default, { subtitle: 'Dashboard', fullWidth: true }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'p',
      null,
      '(make your browser window really wide, and compare with a component without the `fullWidth` prop)'
    )
  );
});

