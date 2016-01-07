// base view for "/"
import React from 'react';
import GlobalNavBar from './components/GlobalNavBar.react';
import styles from '../styles/global.css';
import ModalContainer from './components/ModalContainer.react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      modalID: null
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    
  }

  modalOpen() {
    this.setState({ modalID: })
  }

  modalClose() {

  }

  render() {
    return (
      <div className={styles.appContainer}>
        <GlobalNavBar loggedIn={this.state.loggedIn} />
        <div className= {styles.test}> This is the App View </div>
        { this.state.modalID ? <ModalContainer id={this.state.modalID} /> :
        null }
        {this.props.children}
      </div>
    )
  }
}

module.exports = App;
