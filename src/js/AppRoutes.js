// configures routes, including authentication redirects
// import React from 'react';
// import { browserHistory, Router, Route, Link } from 'react-router';
// import { render } from 'react-dom';

import App from './App';

// redirects when user is not logged in
function redirectToLogin(nextState, replaceState) {
  if (!auth.loggedIn()) {
    replaceState({
      nextPathname: nextState.location.pathname
    }, '/login')
  }
}

// if user is logged in, take them to dashboard
function redirectToDashboard(nextState, replaceState) {
  if (auth.loggedIn()) {
    replaceState(null, '/')
  }
}

export default {
  component: App,
  childRoutes: [

    /*** Routes that don't require authentication ***/

    { 
      path: '/about',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./pages/AboutPage'))
        })
      }
    },
    
    {
      path: '/home',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./pages/HomePage'))
        })
      }      
    },

    /*** Routes requiring authentication & redirects ***/

    { /** ROOT PATH **/
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
          cb(null, require('./pages/HomePage'))
        })
      } 
    },

    { /** logged-in user --> Dashboard
          not logged-in --> Login **/
      onEnter: redirectToDashboard,
      childRoutes: [
        {
          path: '/login',
          getComponent: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, require('./components/Login'))
            })
          }
        }
      ]
    },

    { /** PAGES ONLY ACCESSIBLE IF LOGGED IN
            not logged-in --> Login 
            logged-in --> UserPage  
                      --> Other authed pages **/
      onEnter: redirectToLogin,
      childRoutes: [
        {
          path: '/user/:id',
          getComponent: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, require('./pages/UserPage'))
            })
          }
        }
      ]
    }
  ]
}



