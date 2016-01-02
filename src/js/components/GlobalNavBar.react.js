import React from 'react';
import { Link } from 'react-router';
import { LogoutButton, LoginButton } from './NavButtons.react';
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

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  } 
}

module.exports = GlobalNavBar;