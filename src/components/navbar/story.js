import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import Navbar, { NavbarItem, NavbarMobileItem } from './index';


storiesOf('Navbar', module)
  .addWithInfo('Navigation Bar', () => (
    <div className="full-width">
      <Navbar />
    </div>
  ))
  .addWithInfo('With label', () => (
    <div className="full-width">
      <Navbar subtitle="Dashboard" />
    </div>
  ))
  .addWithInfo('With items', () => (
    <div className="full-width">
      <Navbar>
        <NavbarItem
          activePage='active-page'
          pageName={['inactive-page']}
          href="https://example.com"
        >Inactive navbar item</NavbarItem>
        <NavbarItem
          activePage='active-page'
          pageName={['active-page']}
          href="https://example.com"
        >Active navbar item</NavbarItem>
        <NavbarItem
          activePage='active-page'
          pageName={['locked-page']}
          locked={true}
          href="https://example.com"
        >Locked navbar item</NavbarItem>
      </Navbar>
    </div>
  ))
  .addWithInfo('With items and mobile sidebar', () => (
    <div className="full-width">
      <Navbar mobileSidebar={(onCloseSidebar, onOpenSidebar) => [
        <NavbarMobileItem
          activePage='active-page'
          pageName={['inactive-page']}
          href="https://example.com"
          onClick={onCloseSidebar}
        >Inactive navbar item</NavbarMobileItem>,
        <NavbarMobileItem
          activePage='active-page'
          pageName={['active-page']}
          href="https://example.com"
          indent={2}
          onClick={onCloseSidebar}
        >Active indented navbar item</NavbarMobileItem>,
        <NavbarMobileItem
          activePage='active-page'
          pageName={['locked-page']}
          locked={true}
          href="https://example.com"
          onClick={onCloseSidebar}
        >Locked navbar item</NavbarMobileItem>,
        <NavbarMobileItem
          activePage='active-page'
          pageName={['inactive-page']}
          href="https://example.com"
          onClick={onCloseSidebar}
        >Inactive navbar item</NavbarMobileItem>,
        <NavbarMobileItem
          activePage='active-page'
          pageName={['inactive-page']}
          href="https://example.com"
          indent={2}
          onClick={onCloseSidebar}
        >One</NavbarMobileItem>,
        <NavbarMobileItem
          activePage='active-page'
          pageName={['inactive-page']}
          href="https://example.com"
          indent={2}
          onClick={onCloseSidebar}
        >Two</NavbarMobileItem>,
      ]}>
        <NavbarItem
          activePage='active-page'
          pageName={['inactive-page']}
          href="https://example.com"
        >Inactive navbar item</NavbarItem>
        <NavbarItem
          activePage='active-page'
          pageName={['active-page']}
          href="https://example.com"
        >Active navbar item</NavbarItem>
        <NavbarItem
          activePage='active-page'
          pageName={['locked-page']}
          locked={true}
          href="https://example.com"
        >Locked navbar item</NavbarItem>
      </Navbar>
    </div>
  ))
  .addWithInfo('With full width', () => (
    <div className="full-width">
      <Navbar subtitle="Dashboard" fullWidth />
      <br/>
      <p>(make your browser window really wide, and compare with a component without the `fullWidth` prop)</p>
    </div>
  ))
