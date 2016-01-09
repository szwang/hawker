import React from 'react';
import { ButtonInput, Input, Modal } from 'react-bootstrap';

export class LoginModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      username: this.refs.username.getValue(),
      password: this.refs.password.getValue()
    })
  }


  render() {
    return (
      <div>
        <Modal.Header closeButton>
          Login
        </Modal.Header>
        <Modal.Body>
          <Input 
            type="text" 
            value={this.state.username} 
            placeholder="Username" 
            ref="username"
            onChange={this.handleChange} />
          <Input 
            type="text" 
            value={this.state.password} 
            placeholder="Password"
            ref="password"
            onChange={this.handleChange} />
          <ButtonInput value="Login" />
        </Modal.Body>
      </div>

    )
  }
}

export class SignupModal extends React.Component {

  //TODO add validation
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal.Header closeButton>
          Signup
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
      </div>

    )
  }
}