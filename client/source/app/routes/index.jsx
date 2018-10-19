import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/authentication/login';
import Register from '../components/authentication/register';
import RequireAuth from '../components/hoc/require-auth';
import AuthenticatedRoutes from './authenticated';
import Homecontests from '../components/homecontests';
import Articles from '../components/articles';
import Experts from '../components/experts';
import Contests from '../components/contests';
import Winners from '../components/winners';

/* <Route path="/homecontests" component={RequireAuth(AuthenticatedRoutes)} />
    <Route path="/articles" component={RequireAuth(AuthenticatedRoutes)} />
    <Route path="/experts" component={RequireAuth(AuthenticatedRoutes)} />
    <Route path="/contests" component={RequireAuth(AuthenticatedRoutes)} />
    <Route path="/winners" component={RequireAuth(AuthenticatedRoutes)} /> */

const TopLevelRoutes = () => (
  <Switch>
    <Route exact path="/" component ={Login} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route path="/dashboard" component={RequireAuth(AuthenticatedRoutes)} />
    <Route exact path="/homecontests" component={() => <Homecontests />} />
    <Route exact path="/articles" component={() => <Articles />} />
    <Route exact path="/experts" component={() => <Experts />} />
    <Route exact path="/contests" component={() => <Contests />} />
    <Route exact path="/winners" component={() => <Winners />} />
  </Switch>
);

export default TopLevelRoutes;
