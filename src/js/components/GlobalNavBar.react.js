import React from 'react';
import { Link } from 'react-router';
import { LogoutButton, LoginButton } from './NavButtons.react'

class GlobalNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    }
  }

  render() {
    return (
      <div>
        <div style={{ float: 'left'}}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          { this.state.loggedIn ? <Link to="/dashboard">My Profile</Link> : null }
          { this.state.loggedIn ? <LogoutButton /> : <LoginButton /> }
        </div> 
      </div>
    )
  } 
}

module.exports = GlobalNavBar;