import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Articles from '../../components/articles';
import Login from '../../components/authentication/login';

const AuthenticatedRoutes = () => (
  <Switch>
    <Route exact path="/dashboard" component={() => <div><Login /></div>} />
    <Route exact path="/articles" component={() => <Articles />} />
  </Switch>
);

export default AuthenticatedRoutes;
