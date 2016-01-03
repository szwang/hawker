// base view for "/"
import React from 'react';
import GlobalNavBar from './components/GlobalNavBar.react';
import styles from '../styles/global.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    }
  }

  componentWillMount() {
  }

  componentWillMount() {
    // auth.onChange = this.updateAuth
    // auth.login()
    console.log('loading app view');
  }

  render() {
    return (
      <div className={ styles.appContainer }>
        <GlobalNavBar loggedIn={this.state.loggedIn} />
        <div className= {styles.test}> This is the App View </div>
        {this.props.children}
      </div>
    )
  }
}

module.exports = App;
