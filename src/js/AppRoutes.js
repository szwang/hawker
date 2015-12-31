// configures routes, including authentication redirects
import React from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import { render } from 'react-dom';

import App from './App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MarketPage from './pages/MarketPage';
import UserPage from './pages/UserPage';
import NotFoundPage from '.pages/NotFoundPage';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Routh path=''/>
    </Route>
  </Router>
))

export default {
  component: App,
  childRoutes: [
    // routes that don't require authentication
    {
      path: '/'
    },


    // routes 
  ]
}