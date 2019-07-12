import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Meetups from './pages/Meetups';
import About from './pages/About';

function AppRoutes() {

  return (
      <Switch>
        <Route path={'/meetups'} component={Meetups} />
        <Route path={'/about'} component={About} />
        <Redirect from={'*'} to={'/meetups'} />
      </Switch>

  );
}

export default AppRoutes;