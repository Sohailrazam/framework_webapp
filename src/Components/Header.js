import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { NavLink,Link } from "react-router-dom";


import './header.css'

import 'bootstrap/dist/css/bootstrap.min.css';
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" className="bg-nvbar-cls" light expand="md">
        <NavbarToggler color="primary" style={{ marginBottom: '1rem' }} onClick={toggle} />
        <Collapse color="white" className="menus" isOpen={isOpen} navbar>
          <Nav center className="mr-auto ml-auto" navbar>
            <NavItem>
              <NavLink activeClassName="nav_link_color_y" replace={true} className="nav-link" to="/">
                <img className="logoc" height="23px" width="23px" src="/instrumentm.svg" alt="logo" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink replace={true} className="nav-link" activeClassName="nav_link_color_y" to="/framework">framework</NavLink>
            </NavItem>
            <NavItem>
              <NavLink replace={true} activeClassName="nav_link_color_y" className="nav-link" to="/support">support</NavLink>
            </NavItem>
            <NavItem>
              <NavLink replace={true} activeClassName="nav_link_color_y" className="nav-link" to="/about">about</NavLink>
            </NavItem>

            <NavItem>
              <NavLink replace={true} activeClassName="nav_link_color_y" className="nav-link" to="/blog">blog</NavLink>
            </NavItem>
          </Nav>
          <NavLink replace={true} to="/login" activeClassName="nav_link_color_y" >
            <NavbarText className="hideMed" style={{ color: 'white' }}>
              Jan Homriguasen
          </NavbarText>
            <NavbarText>
              <img className="iconacco" height="24px" width="50px" src="/user.svg" alt="logo" />
            </NavbarText>
          </NavLink>
        </Collapse>
      </Navbar>
      {/* <Content/> */}
    </div>
  );
}

export default Header;