import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import Icon from 'react-icons-kit';
import image from '../../image.png';
import { car } from 'react-icons-kit/fa/car';

export default class AdminNavigatioBar extends React.Component {
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
    return (
      <div>
        <Navbar
          // color='primary'
          dark
          expand='md'
          style={{ backgroundColor: '#28282c', padding: 5 }}
        >
          <div className='container'>
            {/* <NavbarBrand href="/admin/">
            <Icon className="car-icon" icon={car}/>
             G66 CARS ADMIN</NavbarBrand> */}
            <NavbarBrand
              style={{
                marginLeft: 7,
                marginTop: 5,
                fontWeight: 'bold',
                color: 'white',
                fontSize: 25
              }}
            >
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
                  <NavLink href='/admin/'>HOME</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/admin/newcar'>ADD NEW BIKE</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/admin/messages'>MESSAGES</NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav caret>
                    ADMIN
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>PROFILE</DropdownItem>
                    <DropdownItem>LOGOUT</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
