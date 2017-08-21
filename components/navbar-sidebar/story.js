import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './styles.scss';
import NavbarSidebar, { NavbarSidebarItem } from './index';
import Button from '../button/index';;


storiesOf('NavbarSidebar', module)
  .addWithInfo('A sticky sidebar', () => (
    <NavbarSidebar show={true}>
      <NavbarSidebarItem header={true} activePage="active" pageName="foo" href="#/foo">Foo!</NavbarSidebarItem>
      <NavbarSidebarItem activePage="active" pageName="foo" href="#/foo">Foo!</NavbarSidebarItem>
      <NavbarSidebarItem activePage="active" pageName="active" href="#/active">Active!</NavbarSidebarItem>
    </NavbarSidebar>
  ))
  .addWithInfo('An interactive sidebar', () => {
    class SidebarWrapped extends React.Component {
      constructor(props) {
        super(props);
        this.state = { show: false };
      }
      render() {
        return <div>
          <Button style={{marginLeft: 400}} onClick={() => this.setState({show: !this.state.show})}>Toggle</Button>
          <NavbarSidebar show={this.state.show}>
            <NavbarSidebarItem header={true} activePage="active" pageName="foo" href="#/foo">Foo!</NavbarSidebarItem>
            <NavbarSidebarItem activePage="active" pageName="foo" href="#/foo">Foo!</NavbarSidebarItem>
            <NavbarSidebarItem activePage="active" pageName="active" href="#/active">Active!</NavbarSidebarItem>
          </NavbarSidebar>
        </div>;
      }
    }

    return <SidebarWrapped />;
  })
