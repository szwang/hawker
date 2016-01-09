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

    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
      school: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {

  }

  render() {
    return (
      <div>
        <Modal.Body>
          <Input type="select" placeholder="Select school">
            <option>Select school...</option>
            <option value="other">...</option>
          </Input>
          <Input 
            type="text" 
            value={this.state.email} 
            placeholder="School email" 
            ref="email"
            onChange={this.handleChange} />
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
          <Input 
            type="text" 
            value={this.state.passwordConfirm} 
            placeholder="Re-enter password"
            ref="passwordConfim"
            onChange={this.handleChange} />
        </Modal.Body>
      </div>

    )
  }
}