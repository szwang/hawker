// base view for "/"
import React from 'react'
import { Link } from 'react-router'
// import auth from '../utils/auth'
// import NavBar from './components/NavBar.react';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  updateAuth(loggedIn) {
    // this.setState({
    //   loggedIn: !!loggedIn
    // })
  }

  componentWillMount() {
    // auth.onChange = this.updateAuth
    // auth.login()
    console.log('loading app view')
  }

  render() {
    return (
      <div>
        <div> This is the App View </div>
        {this.props.children}
      </div>
    )
  }
}

module.exports = App;
