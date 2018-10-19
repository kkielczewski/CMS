import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homecontests from '../../components/homecontests';
import Articles from '../../components/articles';
import Experts from '../../components/experts';
import Contests from '../../components/contests';
import Winners from '../../components/winners';
import Login from '../../components/authentication/login';

const AuthenticatedRoutes = () => (
  <Switch>
    <Route exact path="/dashboard" component={() => <Login /> } />
    <Route exact path="/homecontests" component={() => <Homecontests />} />
    <Route exact path="/articles" component={() => <Articles />} />
    <Route exact path="/experts" component={() => <Experts />} />
    <Route exact path="/contests" component={() => <Contests />} />
    <Route exact path="/winners" component={() => <Winners />} />
  </Switch>
);

export default AuthenticatedRoutes;
