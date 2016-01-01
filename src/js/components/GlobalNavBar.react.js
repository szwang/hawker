import React from 'react';
import { Link } from 'react-router';

class GlobalNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={{ float: 'left'}}>
          <Link to="/">Home</Link>{' '}
          <Link to="/about">About</Link>{' '}
          <Link to="/dashboard">My Profile</Link>{' '}
        </div> 
      </div>
    )
  } 
}

module.exports = GlobalNavBar;