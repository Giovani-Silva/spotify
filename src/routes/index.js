import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from '../pages/start';
import Search from '../pages/search';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Start} />
    <Route exact path="/search" component={Search} />
  </Switch>
);

export default Routes;
