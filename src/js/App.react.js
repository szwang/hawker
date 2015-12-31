// base view for "/"
import React from 'react'
import { Link } from 'react-router'
// import auth from '../utils/auth'
import NavBar from './components/NavBar';

const App = React.createClass({

  getInitialState() {
    // return {
    //   loggedIn: auth.loggedIn()
    // }
  },

  updateAuth(loggedIn) {
    // this.setState({
    //   loggedIn: !!loggedIn
    // })
  },

  componentWillMount() {
    // auth.onChange = this.updateAuth
    // auth.login()
  },

  render() {
    return (
      <div>
        <NavBar />
        <div> This is the App View </div>
      </div>
    )
  }

})

export default App;
