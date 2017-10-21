import React, { Component } from 'react';
import Brand from './Brand'
import { Navbar, NavItem } from 'react-materialize';
import '../style.css'


class Header extends Component {

  render() {
    return (

      <Navbar brand='POC' right>
				<NavItem href='#'>Sergey Kitchenkov</NavItem>
			</Navbar>
    )
  }
}

export default Header
