import React from 'react';
import { Link } from 'react-router';
import { LogoutButton, LoginButton, SignupButton } from './AuthNavButtons.react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class GlobalNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"> Hawker </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to={{ pathname: '/about' }}>
              <NavItem>About</NavItem>
            </LinkContainer>
            { this.props.loggedIn ?
              <LinkContainer to={{ pathname: '/dashboard' }}>
                <NavItem>My Profile</NavItem>
              </LinkContainer> :
              null }
            { this.props.loggedIn ?
              <NavItem><LogoutButton /></NavItem> :
              <NavItem><SignupButton /></NavItem> }
            { this.props.loggedIn ?
              null :
              <NavItem><LoginButton /></NavItem> }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  } 
}

module.exports = GlobalNavBar;