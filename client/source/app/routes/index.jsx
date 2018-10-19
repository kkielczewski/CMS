import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/authentication/login';
import Register from '../components/authentication/register';
import RequireAuth from '../components/hoc/require-auth';
import AuthenticatedRoutes from './authenticated';
import Main from '../components/main';

const TopLevelRoutes = () => (
  <Switch>
    <Route exact path="/" component ={Main} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route path="/dashboard" component={RequireAuth(AuthenticatedRoutes)} />
    <Route path="/articles" component={RequireAuth(AuthenticatedRoutes)} />
  </Switch>
);

export default TopLevelRoutes;
