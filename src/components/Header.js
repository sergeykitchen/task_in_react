import React, { Component } from 'react';
import Brand from './Brand'
import { Navbar, NavItem, Icon, Col } from 'react-materialize';
import '../style.css'


class Header extends Component {

  render() {
    return (

      <Navbar brand='logo' right>
				<NavItem href='get-started.html'>Getting started</NavItem>
				<NavItem href='components.html'>Components</NavItem>
			</Navbar>
    )
  }
}

export default Header
