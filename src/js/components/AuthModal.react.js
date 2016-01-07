import React from 'react';
import { Modal } from 'react-bootstrap';

class AuthenticationModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal = false;
    }
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          {this.state.authTitle}
        </Modal.Header>
        <Modal.Body>
          {this.state.login ?
          <LoginForm /> :
          <SignupForm />}
        </Modal.Body>
        </Modal>
      </div>

    )
  }
}