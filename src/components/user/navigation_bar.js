import React from 'react';
import './nav.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import logo from '../../logo.png';
import Icon from 'react-icons-kit';
import { motorcycle } from 'react-icons-kit/fa/motorcycle';
import { userCircleO } from 'react-icons-kit/fa/userCircleO';
import { signOut } from 'react-icons-kit/fa/signOut';

import image from '../../image.png';

export default class NavigatioBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return (
      <div>
        <Navbar
          style={{ backgroundColor: '#28282c', padding: 5 }}
          dark
          expand='md'
        >
          <div className='container'>
            <NavbarBrand
              href='/'
              style={{ marginLeft: 7, marginTop: 5, fontWeight: 'bold' }}
            >
              {/* <Icon
                size={23}
                style={{ marginTop: 10 }}
                className='car-icon'
                icon={motorcycle}
              /> */}
              <img
                src={image}
                style={{ height: 30, width: 30, marginRight: 7 }}
              />
              BIKES
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href='/cars'>BIKES</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink href="/">FINANCE</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">SERVICE</NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink href='/'>RENT</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/'>PARTS</NavLink>
                </NavItem>
                {/* <div className='col-5'> */}
                <NavItem>
                  <NavLink href='/' style={{ MarginLeft: 0, marginRight: 0 }}>
                    ABOUT US
                  </NavLink>
                </NavItem>
                {/* </div> */}

                {/* {isLoggedIn ? (
                  <div
                    style={{
                      color: 'white',
                      marginLeft: 7,
                      marginRight: 7,
                      marginTop: 4
                    }}
                  >
                    <Icon size={30} icon={userCircleO} />
                  </div>
                ) : null} */}

                {localStorage.getItem('isLoggedIn') === 'true' ? (
                  <UncontrolledDropdown nav direction='left'>
                    <DropdownToggle nav caret>
                      <Icon size={25} icon={userCircleO} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>PROFILE</DropdownItem>
                      <DropdownItem
                        href='/'
                        onClick={() => {
                          alert('Do you want to Log out !!');
                          localStorage.setItem('isLoggedIn', false);
                          this.forceUpdate();
                        }}
                      >
                        LOGOUT
                        <Icon
                          size={23}
                          // style={{ marginTop: 10 }}
                          className='car-icon'
                          icon={signOut}
                        />
                        {/* </Link> */}
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                ) : (
                  <NavItem style={{ marginRight: 7 }}>
                    <button type='submit' className='btn btn-success btn-block'>
                      <NavLink
                        href='/sign-in'
                        style={{ height: 22, padding: 0 }}
                      >
                        Sign in
                      </NavLink>
                    </button>
                  </NavItem>
                )}

                {/* {isLoggedIn ? (
                  <NavItem>
                    <button type='submit' className='btn btn-success btn-block'>
                      <NavLink href='/' style={{ height: 22, padding: 0 }}>
                        Log Out
                      </NavLink>
                    </button>
                  </NavItem>
                ) : (
                  <NavItem>
                    <button type='submit' className='btn btn-success btn-block'>
                      <NavLink
                        href='/sign-in'
                        style={{ height: 22, padding: 0 }}
                      >
                        Sign in
                      </NavLink>
                    </button>
                  </NavItem>
                )} */}

                {/* <UncontrolledDropdown nav>
                  <DropdownToggle nav caret>
                    ABOUT
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>ABOUT US</DropdownItem>
                    <DropdownItem>STAFF</DropdownItem>
                    <DropdownItem>CONTACT US</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
                {/* <div
                  className='col-4'
                  style={{ marginLeft: -20, paddingLeft: 0 }}
                /> */}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
