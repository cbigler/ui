import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Navbar, { NavbarItem, NavbarMobileItem } from './index';

import { grayLight } from '../../../variables/colors.json';


storiesOf('Navbar', module)
  .addWithInfo('Navigation Bar', () => (
    <div className="full-width">
      <Navbar />

      <div style={{
        background: grayLight,
        marginLeft: -10,
        marginRight: -10,
        boxSizing: 'border-box',
        maxWidth: 1000,
        height: 100,
        margin: '20px auto',
        paddingLeft: 10,
        paddingRight: 10,
      }} />
    </div>
  ))
  .addWithInfo('With items', () => (
    <div className="full-width">
      <Navbar>
        <NavbarItem
          activePage='active-page'
          pageName={['inactive-page']}
          href="https://example.com"
        >Onboarding</NavbarItem>
        <NavbarItem
          activePage='active-page'
          pageName={['active-page']}
          href="https://example.com"
        >Live</NavbarItem>
        <NavbarItem
          activePage='active-page'
          pageName={['locked-page']}
          locked={true}
          href="https://example.com"
        >Insights</NavbarItem>
      </Navbar>

      <div style={{
        background: grayLight,
        marginLeft: -10,
        marginRight: -10,
        boxSizing: 'border-box',
        maxWidth: 1000,
        height: 100,
        margin: '20px auto',
        paddingLeft: 10,
        paddingRight: 10,
      }} />
    </div>
  ))
  .addWithInfo('Interactive navbar', () => {
    class AdjustingNavbar extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          activePage: 'onboarding',
        };
      }
      render() {
        return <div className="full-width">
          <Navbar>
            <NavbarItem
              activePage={this.state.activePage}
              pageName={['onboarding']}
              href="#"
              onClick={() => this.setState({activePage: 'onboarding'})}
            >Onboarding</NavbarItem>
            <NavbarItem
              activePage={this.state.activePage}
              pageName={['live']}
              href="#"
              onClick={() => this.setState({activePage: 'live'})}
            >Live</NavbarItem>
            <NavbarItem
              activePage='active-page'
              pageName={['insights']}
              locked={true}
              lockedReason="This is why I'm locked!"
              href="https://example.com"
            >Insights</NavbarItem>
            <NavbarItem
              activePage='active-page'
              pageName={['insights']}
              locked={false}
              lockedReason="This is why I'm locked!"
              href="https://example.com"
            >Insights</NavbarItem>
          </Navbar>

          <div style={{
            background: grayLight,
            marginLeft: -10,
            marginRight: -10,
            boxSizing: 'border-box',
            maxWidth: 1000,
            height: 100,
            margin: '20px auto',
            paddingLeft: 10,
            paddingRight: 10,
          }} />
        </div>
      }
    }
    return <AdjustingNavbar />;
  })
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
          lockedReason="Insights will be unlocked once your units are configured."
          href="https://example.com"
        >Locked navbar item</NavbarItem>
      </Navbar>
      <div style={{
        background: grayLight,
        marginLeft: -10,
        marginRight: -10,
        boxSizing: 'border-box',
        maxWidth: 1000,
        height: 100,
        margin: '20px auto',
        paddingLeft: 10,
        paddingRight: 10,
      }} />
    </div>
  ))
  .addWithInfo('With full width', () => (
    <div className="full-width">
      <Navbar subtitle="Dashboard" fullWidth />
      <br/>
      <p>(make your browser window really wide, and compare with a component without the `fullWidth` prop)</p>
    </div>
  ))
