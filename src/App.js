/// external modules ///
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

/// components ///
import {
  PrivateRoute,
  Home,
  Users,
  User,
  Graphs,
  Graph,
  SignUp,
  SignIn,
  SignOut,
} from 'components'

/// routes ///
import { client } from 'routes'

/***************************************
  MAIN
***************************************/

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          {/* Home | redirect to Sign In */}
          <PrivateRoute
          exact path={[ client.ends.root (), client.ends.home () ]}
          component={Home}
          />
          {/* View All Users */}
          <Route
          exact path={client.ends.users ()}
          component={Users}
          />
          {/* View User */}
          <Route
          exact path={client.ends.user (':id')}
          component={User}
          />
          {/* View All Graphs */}
          <Route
          exact path={client.ends.graphs ()}
          component={Graphs}
          />
          {/* View Graph */}
          <Route
          exact path={client.ends.graph (':id')}
          component={Graph}
          />
          {/* Sign Up */}
          <Route
          exact path={client.ends.signup ()}
          component={SignUp}
          />
          {/* Sign In */}
          <Route
          exact path={client.ends.signin ()}
          component={SignIn}
          />
          {/* Sign Out */}
          <Route
          exact path={client.ends.signout ()}
          component={SignOut}
          />
          {/* default */}
          <Redirect to={client.ends.home ()}/>
        </Switch>
      </div>
    </Router>
  )
}

/**************************************/

export default App
