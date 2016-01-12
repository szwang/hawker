import React from 'react';
import AuthActionCreators from '../actions/AuthActionCreators';

export class LoginButton extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
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

export class SignupButton extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    AuthActionCreators.openAuthModal('signup');
  }

  render() {
    return (
      <div onClick={this.onClick}>
        Signup
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

