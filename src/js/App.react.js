// base view for "/"
import React from 'react';
import GlobalNavBar from './components/GlobalNavBar.react';
import styles from '../styles/global.css';
import ModalContainer from './components/ModalContainer.react';
import ModalStore from './stores/ModalStore';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      modalType: null
    }

    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  componentWillMount() {
    AuthModalStore.addChangeListener(this.modalOpen);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    AuthModalStore.removeChangeListener(this.modalOpen)
  }

  modalOpen() {
    this.setState({ modalType: ModalStore.getModalType() });
  }

  modalClose() {
    this.setState({ modalType: null });
  }

  render() {
    return (
      <div className={styles.appContainer}>
        <GlobalNavBar loggedIn={this.state.loggedIn} />
        <div className= {styles.test}> This is the App View </div>
        { this.state.modalType ? <ModalContainer id={this.state.modalType} close={this.modalClose} /> :
        null }
        {this.props.children}
      </div>
    )
  }
}

module.exports = App;
