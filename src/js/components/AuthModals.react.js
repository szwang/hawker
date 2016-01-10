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
      school: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.passwordValidationState = this.passwordValidationState.bind(this);
    this.usernameValidationState = this.usernameValidationState.bind(this);
    this.emailValidationState = this.emailValidationState.bind(this);
    this.passwordConfirmValidationState = this.passwordConfirmValidationState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  usernameValidationState() {
    let usernameStyle;
    let length = this.state.username.length;
    if(length >= 4) {
      usernameStyle = 'success';
    } else if(length > 0) {
      usernameStyle = 'error';
    }
    let usernameValid = usernameStyle === 'success';

    return { usernameStyle, usernameValid };
  }

  emailValidationState() { //TODO: allow for shorter email lengths
    let emailStyle;
    let length = this.state.email.length;
    let tail = this.state.email.slice(length - 4, length);
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(tail === '.edu' && regex.test(this.state.email)) {
      emailStyle = 'success';
    } else if(length > 0) {
      emailStyle = 'error';
    }
    let emailValid = emailStyle === 'success';
    
    return { emailStyle, emailValid };
  }

  passwordValidationState() {
    let pwStyle;
    let regex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    if(regex.test(this.state.password)) {
      pwStyle = 'success';
    } else if(this.state.password.length > 0) {
      pwStyle = 'error';
    }
    let pwValid = pwStyle === 'success';

    return { pwStyle, pwValid }
  }

  passwordConfirmValidationState() {
    let pw2Style;
    if(this.state.passwordConfirm === this.state.password && this.state.passwordConfirm.length > 0) {
      pw2Style = 'success';
    } else if(this.state.passwordConfirm.length > 0) {
      pw2Style = 'error';
    }
    let pw2Valid = pw2Style === 'success';

    return { pw2Style, pw2Valid };
  }

  handleChange() {
    this.setState({
      email: this.refs.email.getValue(),
      username: this.refs.username.getValue(),
      password: this.refs.password.getValue(),
      passwordConfirm: this.refs.passwordConfirm.getValue()
    });
    this.setState(this.usernameValidationState());
    this.setState(this.emailValidationState());
    this.setState(this.passwordValidationState());
    this.setState(this.passwordConfirmValidationState());
  }

  handleSubmit() {
    if(this.state.usernameValid && this.state.emailValid && this.state.pwValid && this.state.pw2Valid && this.state.schoolValid) {
      console.log("all inputs valid")
    } else {
      console.log("need to fix form before submit")
    }
    console.log(this.state);
  }

  render() {
    var schools = [['wellesley', 'Wellesley College'], ['mit', "MIT"]];
    var schoolOptions = schools.map((school, i) => { //TODO: fix dropdown + school & email compare
      return(
        <option key={i} value={school[0]}>{school[1]}</option>
      )
    })
    return (
      <div>
        <Modal.Body>
          <Input type="select" defaulValue="Select a school">
            {schoolOptions}
          </Input>
          <Input 
            type="text" 
            value={this.state.email} 
            placeholder="School email" 
            ref="email"
            onChange={this.handleChange}
            bsStyle={this.state.emailStyle} hasFeedback
            help="Enter your valid school email address with .edu ending" />
          <Input 
            type="text" 
            value={this.state.username} 
            placeholder="Username" 
            ref="username"
            bsStyle={this.state.usernameStyle} hasFeedback
            onChange={this.handleChange} />
          <Input 
            type="text" 
            value={this.state.password} 
            placeholder="Password"
            ref="password"
            bsStyle={this.state.pwStyle} hasFeedback
            onChange={this.handleChange} />
          <Input 
            type="text" 
            value={this.state.passwordConfirm} 
            placeholder="Re-enter password"
            ref="passwordConfirm"
            bsStyle={this.state.pw2Style} hasFeedback
            onChange={this.handleChange} />
          <ButtonInput value="Sign Up" onClick={this.handleSubmit} />
        </Modal.Body>
      </div>

    )
  }
}