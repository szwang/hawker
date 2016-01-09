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
      loggedIn: false
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className={styles.appContainer}>
        <GlobalNavBar loggedIn={this.state.loggedIn} />
        <div className= {styles.test}> This is the App View </div>
        <ModalContainer />
        {this.props.children}
      </div>
    )
  }
}

module.exports = App;
