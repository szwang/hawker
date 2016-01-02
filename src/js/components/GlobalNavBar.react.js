import React from 'react';
import { Link } from 'react-router';
import { LogoutButton, LoginButton } from './NavButtons.react'

class GlobalNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={{ float: 'left'}}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          { this.props.loggedIn ? <Link to="/dashboard">My Profile</Link> : null }
          { this.props.loggedIn ? <LogoutButton /> : <LoginButton /> }
        </div> 
      </div>
    )
  } 
}

module.exports = GlobalNavBar;