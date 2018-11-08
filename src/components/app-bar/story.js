import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AppBar, { AppBarItem, AppBarMobileItem } from './index';
import { IconDashboards, IconGlobe, IconStopWatch, IconCopy, IconLightning } from '@density/ui-icons';

import { grayLight } from '../../../variables/colors.json';


storiesOf('AppBar', module)
  .addWithInfo('Navigation Bar', () => (
    <div className="full-width">
      <AppBar>
        <AppBarItem
          activePage='active-page'
          pageName={['inactive-page']}
          href="https://example.com"
        ><IconDashboards /> Dashboards</AppBarItem>
        <AppBarItem
          activePage='active-page'
          pageName={['active-page']}
          href="https://example.com"
        ><IconGlobe color="primary" /> Explore</AppBarItem>
        <AppBarItem
          activePage='active-page'
          pageName={['inactive-page']}
          locked={false}
          href="https://example.com"
        ><IconStopWatch /> Live</AppBarItem>
        <AppBarItem
          activePage='active-page'
          pageName={['inactive-page']}
          locked={false}
          href="https://example.com"
        ><IconCopy /> Developer</AppBarItem>
        <AppBarItem
          activePage='active-page'
          pageName={['locked-page']}
          locked={true}
          href="https://example.com"
        ><IconLightning color="#CBCFD6"/> Onboarding</AppBarItem>
      </AppBar>

      <div style={{
        background: grayLight,
        boxSizing: 'border-box',
        maxWidth: 1000,
        height: 500,
        margin: '0',
        paddingLeft: 10,
        paddingRight: 10,
      }} />
    </div>
  ))
  .addWithInfo('Interactive navbar', () => {
    class AdjustingAppBar extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          activePage: 'onboarding',
        };
      }
      render() {
        return <div className="full-width">
          <AppBar>
            <AppBarItem
              activePage={this.state.activePage}
              pageName={['onboarding']}
              href="#"
              onClick={() => this.setState({activePage: 'onboarding'})}
            >Onboarding</AppBarItem>
            <AppBarItem
              activePage={this.state.activePage}
              pageName={['live']}
              href="#"
              onClick={() => this.setState({activePage: 'live'})}
            >Live</AppBarItem>
            <AppBarItem
              activePage='active-page'
              pageName={['insights']}
              locked={true}
              lockedReason="This is why I'm locked!"
              href="https://example.com"
            >Insights</AppBarItem>
            <AppBarItem
              activePage='active-page'
              pageName={['insights']}
              locked={false}
              lockedReason="This is why I'm locked!"
              href="https://example.com"
            >Insights</AppBarItem>
          </AppBar>

          <div style={{
            background: grayLight,
            boxSizing: 'border-box',
            maxWidth: 1000,
            height: 500,
            margin: '0',
            paddingLeft: 10,
            paddingRight: 10,
          }} />
        </div>
      }
    }
    return <AdjustingAppBar />;
  })
  .addWithInfo('With items and mobile sidebar', () => (
    <div className="full-width">
      <AppBar mobileSidebar={(onCloseSidebar, onOpenSidebar) => [
        <AppBarMobileItem
          activePage='active-page'
          pageName={['inactive-page']}
          href="https://example.com"
          onClick={onCloseSidebar}
        >Inactive navbar item</AppBarMobileItem>,
        <AppBarMobileItem
          activePage='active-page'
          pageName={['active-page']}
          href="https://example.com"
          indent={2}
          onClick={onCloseSidebar}
        >Active indented navbar item</AppBarMobileItem>,
        <AppBarMobileItem
          activePage='active-page'
          pageName={['locked-page']}
          locked={true}
          href="https://example.com"
          onClick={onCloseSidebar}
        >Locked navbar item</AppBarMobileItem>,
        <AppBarMobileItem
          activePage='active-page'
          pageName={['inactive-page']}
          href="https://example.com"
          onClick={onCloseSidebar}
        >Inactive navbar item</AppBarMobileItem>,
        <AppBarMobileItem
          activePage='active-page'
          pageName={['inactive-page']}
          href="https://example.com"
          indent={2}
          onClick={onCloseSidebar}
        >One</AppBarMobileItem>,
        <AppBarMobileItem
          activePage='active-page'
          pageName={['inactive-page']}
          href="https://example.com"
          indent={2}
          onClick={onCloseSidebar}
        >Two</AppBarMobileItem>,
      ]}>
        <AppBarItem
          activePage='active-page'
          pageName={['inactive-page']}
          href="https://example.com"
        >Inactive navbar item</AppBarItem>
        <AppBarItem
          activePage='active-page'
          pageName={['active-page']}
          href="https://example.com"
        >Active navbar item</AppBarItem>
        <AppBarItem
          activePage='active-page'
          pageName={['locked-page']}
          locked={true}
          lockedReason="Insights will be unlocked once your units are configured."
          href="https://example.com"
        >Locked navbar item</AppBarItem>
      </AppBar>
      <div style={{
        background: grayLight,
        boxSizing: 'border-box',
        maxWidth: 1000,
        height: 500,
        margin: '0',
        paddingLeft: 10,
        paddingRight: 10,
      }} />
    </div>
  ))
  .addWithInfo('With full width', () => (
    <div className="full-width">
      <AppBar subtitle="Dashboard" fullWidth />
      <br/>
      <p>(make your browser window really wide, and compare with a component without the `fullWidth` prop)</p>
    </div>
  ))
