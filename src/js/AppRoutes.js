import auth from './stores/AuthStore';

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
  childRoutes: [

    /*** Routes that don't require authentication ***/

    { 
      path: '/about',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./pages/AboutPage.react'))
        })
      }
    },

    {
      path: '/home',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./pages/HomePage.react'))
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
            cb(null, require('./pages/MarketPage.react'))
          })
        }
        // if user is not logged in, direct them to home page
        return require.ensure([], (require) => {
          cb(null, require('./pages/HomePage.react'))
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
              cb(null, require('./pages/AuthPage.react'))
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
              cb(null, require('./pages/UserPage.react'))
            })
          }
        }
      ]
    }
  ]
}


