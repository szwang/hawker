import React from 'react';
import { Modal } from 'react-bootstrap';
import ModalStore from  '../stores/ModalStore';
import { LoginModal, SignupModal } from './AuthModals.react';

class ModalContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalType: null
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    ModalStore.addChangeListener(this.open);
  }

  componentWillUnmount() {
    ModalStore.removeChangeListener(this.open);
  }

  open() {
    this.setState({ showModal: true, modalType: ModalStore.getModalType() });
  }

  close() {
    this.setState({ showModal: false, modalType: null });
  }

  render() {
    var modalContent;
    
    //grab correct modal type
    if(this.state.modalType === 'login') {
      modalContent = <LoginModal />
    } else if(this.state.modalType === 'signup') {
      modalContent = <SignupModal />
    } else {
      modalContent = null;
    }

    return (
        <Modal show={this.state.showModal} onHide={this.close}>
        {modalContent}
        </Modal>
    )
  }
}

export default ModalContainer;

