import React from 'react';
import { Link } from 'react-router';

export class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  render() {
    return (
      <div>
        Login Button
      </div>
    )
  } 
}

export class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  render() {
    return (
      <div>
        Logout Button
      </div>
    )
  } 
}


