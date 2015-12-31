// configures routes, including authentication redirects
// import React from 'react';
// import { browserHistory, Router, Route, Link } from 'react-router';
// import { render } from 'react-dom';

import App from './App';

export default {
  component: App,
  childRoutes: [
    /** Routes that don't require authentication **/

    { 
      path: '/about',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./pages/AboutPage'))
        })
      }
    },

    /** Routes requiring authentication & redirects **/

    { 
      path: '/',
      getComponent: (location, cb) => {
        // if user has logged in, direct them to market
        if(auth.loggedIn()) {
          return require.ensure([], (require) => {
            cb(null, require('./pages/MarketPage'))
          })
        }
        // if user is not logged in, direct them to home page
        return require.ensure([], (require) => {
          cb(null, require('./pages/Home'))
        })
      } 
    }

  ]
}