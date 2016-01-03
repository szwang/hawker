// base view for "/"
import React from 'react';
import GlobalNavBar from './components/GlobalNavBar.react';
import { auth0Key } from '../../secretKeys.js'
// import auth from '../utils/auth'
// import NavBar from './components/NavBar.react';

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
      <div>
        <GlobalNavBar loggedIn={this.state.loggedIn} />
        <div> This is the App View </div>
        {this.props.children}
      </div>
    )
  }
}

module.exports = App;
