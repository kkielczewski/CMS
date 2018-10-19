import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Articles from '../../components/articles';

const AuthenticatedRoutes = () => (
  <Switch>
    <Route exact path="/dashboard" component={() => <div>Welcome to the dashboard</div>} />
    <Route exact path="/articles" component={() => <Articles />} />
  </Switch>
);

export default AuthenticatedRoutes;
