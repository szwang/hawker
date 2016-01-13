import React from 'react';
import { ButtonInput, Input, Modal } from 'react-bootstrap';
import _ from 'lodash';
import AuthActionCreators from '../actions/AuthActionCreators';

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
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      school: null,
      usernameValid: false,
      passwordValid: false,
      emailValid: false,
      passwordConfirmValid: false,
      submitSuccess: true
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    
    this.usernameValidationState = this.usernameValidationState.bind(this);
    this.emailValidationState = this.emailValidationState.bind(this);
    this.passwordValidationState = this.passwordValidationState.bind(this);
    this.passwordConfirmValidationState = this.passwordConfirmValidationState.bind(this);

    this.submitForm = this.submitForm.bind(this);
  }

  // handleChange() {
  //   this.setState({
  //     email: this.refs.email.getValue(),
  //     username: this.refs.username.getValue(),
  //     password: this.refs.password.getValue(),
  //     passwordConfirm: this.refs.passwordConfirm.getValue()
  //   })
  // }
  handleEmailChange() {
    this.setState({ email: this.refs.email.getValue() });
    // if(this.emailValidationState() === 'success') {
    //   this.setState({ emailValid: true });
    // }
  }

  handleUsernameChange() {
    this.setState({ username: this.refs.username.getValue() });
    // if(this.usernameValidationState() === 'success') {
    //   this.setState({ usernameValid: true });
    // }
  }


  handleSchoolChange() {
    console.log('handleSchoolChange: ', this.refs.school.getValue())
    this.setState({ school: this.refs.school.getValue() });
  }

  handlePasswordChange() {
    this.setState({ password: this.refs.password.getValue() });
    // if(this.passwordValidationState() === 'success') {
    //   this.setState({ passwordValid: true });
    // }
  }

  handlePasswordConfirmChange() {
    this.setState({ passwordConfirm: this.refs.passwordConfirm.getValue() });
    // if(this.passwordConfirmValidationState() === 'success') {
    //   this.setState({ passwordConfirmValid: true });
    // }
  }

  usernameValidationState() { // TODO: refactor so there's a ternary in bsStyle instead of a function
    let length = this.state.username.length;
    if(length >= 4) return 'success';
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

  submitForm() {
    let arr = [];
    this.usernameValidationState() === 'success' ? arr.push(true) : arr.push(false);
    this.passwordValidationState() === 'success' ? arr.push(true) : arr.push(false);
    this.passwordConfirmValidationState() === 'success' ? arr.push(true) : arr.push(false);
    this.emailValidationState() === 'success' ? arr.push(true) : arr.push(false);

    if(_.reduce(arr, (i, j) => { return i && j; }) && this.state.school && this.state.school !== 'Select your school') {
      console.log('all valid!');
      //send to server
      let data = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        school: this.state.school
      }

      AuthActionCreators.signup(data);
    } else {
      console.log('not all valid');
      this.setState({ submitSuccess: false });
    }
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
          <Input 
            type="select" 
            ref="school" 
            value={this.state.school} 
            onChange={this.handleSchoolChange} >
            <option defaultValue>Select your school</option>
            {schoolOptions}
          </Input>
          <Input
            type="text"
            value={this.state.email}
            placeholder="Email"
            ref="email"
            bsStyle={this.emailValidationState()} hasFeedback
            onChange={this.handleEmailChange} />
          <Input 
            type="text" 
            value={this.state.username} 
            placeholder="Username" 
            ref="username"
            bsStyle={this.usernameValidationState()} hasFeedback
            onChange={this.handleUsernameChange} />
          <Input 
            type="password" 
            value={this.state.password} 
            placeholder="Password"
            ref="password"
            bsStyle={this.passwordValidationState()} hasFeedback
            onChange={this.handlePasswordChange} />
          <Input 
            type="password" 
            value={this.state.passwordConfirm} 
            placeholder="Re-enter password"
            ref="passwordConfirm"
            bsStyle={this.passwordConfirmValidationState()} hasFeedback
            onChange={this.handlePasswordConfirmChange} />
          <div> {!this.state.submitSuccess ? "Please make sure all fields are valid." : null} </div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonInput onClick={this.submitForm} value="Sign Up" />
        </Modal.Footer>
      </div>

    )
  }
}