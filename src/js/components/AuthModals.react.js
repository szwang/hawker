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

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
      school: '',
      usernameValid: false,
      passwordValid: false,
      emailValid: false,
      passwordConfirmValid: false
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleUsernameChange.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    
    this.usernameValidationState = this.usernameValidationState.bind(this);
    this.emailValidationState = this.emailValidationState.bind(this);
    this.passwordValidationState = this.passwordValidationState.bind(this);
    this.passwordConfirmValidationState = this.passwordConfirmValidationState.bind(this);
  }

  handleChange() {
    this.setState({
      email: this.refs.email.getValue(),
      username: this.refs.username.getValue(),
      password: this.refs.password.getValue(),
      passwordConfirm: this.refs.passwordConfirm.getValue()
    })
  }

  handleUsernameChange() {
    this.setState({ username: this.refs.username.getValue() });
    if(this.usernameValidationState() === 'success') {
      this.setState({ usernameValid: true });
    }
  }

  handleEmailChange() {
    this.setState({ email: this.refs.email.getValue() });
    if(this.emailValidationState() === 'success') {
      this.setState({ emailValid: true });
    }
  }

  handleSchoolChange() {
    this.setState({ school: this.refs.school.getValue() });
  }

  handlePasswordChange() {
    this.setState({ password: this.refs.password.getValue() });
    if(this.passwordValidationState() === 'success') {
      this.setState({ passwordValid: true });
    }
  }

  handlePasswordConfirmChange() {
    this.setState({ passwordConfirm: this.refs.passwordConfirm.getValue() });
    if(this.passwordConfirmValidationState() === 'success') {
      this.setState({ passwordConfirmValid: true });
    }
  }

  usernameValidationState() {
    let length = this.state.username.length;
    if(length >= 4) return 'success' 
    else if(length > 0) return 'error';
  }

  emailValidationState() {
    let length = this.state.email.length;
    let tail = this.state.email.slice(length - 4, length);
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(tail === '.edu' && regex.test(this.state.email)) return 'success';
    else if(length > 0) return 'error';
  }

  passwordValidationState() {
    let regex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    if(regex.test(this.state.password)) return 'success';
    else if(this.state.password.length > 0) return 'error';
  }

  passwordConfirmValidationState() {
    if(this.state.passwordConfirm === this.state.password && this.state.passwordConfirm.length > 0) return 'success';
    else if(this.state.passwordConfirm.length > 0) return 'error';
  }

  render() {
    var schools = [['wellesley', 'Wellesley College'], ['mit', "MIT"]];
    var schoolOptions = schools.map((school, i) => { //TODO: fix dropdown
      return(
        <option key={i} value={school[0]}>{school[1]}</option>
      )
    })
    return (
      <div>
        <Modal.Body>
          <Input type="select" value={this.state.school}>
            <option defaultValue>Select your institution</option>
            {schoolOptions}
          </Input>
          <Input 
            type="text" 
            value={this.state.email} 
            placeholder="School email" 
            ref="email"
            onChange={this.handleChange}
            bsStyle={this.emailValidationState()} hasFeedback
            help="Enter your valid school email address with .edu ending" />
          <Input 
            type="text" 
            value={this.state.username} 
            placeholder="Username" 
            ref="username"
            bsStyle={this.usernameValidationState()} hasFeedback
            onChange={this.handleChange} />
          <Input 
            type="text" 
            value={this.state.password} 
            placeholder="Password"
            ref="password"
            bsStyle={this.passwordValidationState()} hasFeedback
            onChange={this.handleChange} />
          <Input 
            type="text" 
            value={this.state.passwordConfirm} 
            placeholder="Re-enter password"
            ref="passwordConfirm"
            bsStyle={this.passwordConfirmValidationState()} hasFeedback
            onChange={this.handleChange} />
          <ButtonInput value="Sign Up" />
        </Modal.Body>
      </div>

    )
  }
}