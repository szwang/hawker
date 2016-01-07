import React from 'react';
import { Modal } from 'react-bootstrap';

export class LoginModal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal.Header closeButton>
          Login
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
      </div>

    )
  }
}

export class SignupModal extends React.Component {

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