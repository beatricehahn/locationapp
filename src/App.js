import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Users from './user/containers/Users';
import NewPlace from './places/containers/NewPlace';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
