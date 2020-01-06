/// external modules ///
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

/// components ///
import PrivateRoute from 'components/PrivateRoute'

/// routes ///
import { client } from 'routes';

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
          component={<React.Fragment/>}
          />
          {/* View All Users */}
          <Route
          exact path={client.ends.users ()}
          render={() => <div>View All Users</div>}
          // component={<React.Fragment/>}
          />
          {/* View User */}
          <Route
          exact path={client.ends.user (':id')}
          render={() => <div>View User</div>}
          // component={<React.Fragment/>}
          />
          {/* View All Graphs */}
          <Route
          exact path={client.ends.graphs ()}
          render={() => <div>View All Graphs</div>}
          // component={<React.Fragment/>}
          />
          {/* View Graph */}
          <Route
          exact path={client.ends.graph (':id')}
          render={() => <div>View Graph</div>}
          // component={<React.Fragment/>}
          />
          {/* Sign Up */}
          <Route
          exact path={client.ends.signup ()}
          render={() => <div>Sign Up</div>}
          // component={<React.Fragment/>}
          />
          {/* Sign In */}
          <Route
          exact path={client.ends.signin ()}
          render={() => <div>Sign In</div>}
          // component={<React.Fragment/>}
          />
          {/* Sign Out */}
          <Route
          exact path={client.ends.signout ()}
          render={() => <div>Sign Out</div>}
          // component={<React.Fragment/>}
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
