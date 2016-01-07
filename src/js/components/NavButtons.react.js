import React from 'react';
import { Link } from 'react-router';

export class LoginButton extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('login button clicked');
    AuthActionCreators.openAuthModal('login');
  }

  render() {
    return (
      <div onClick={this.onClick}>
        Login
      </div>
    )
  } 
}

export class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Logout
      </div>
    )
  } 
}


