import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from '../pages/start';
import Search from '../pages/search';
import Me from '../pages/me';

import Artist from '../pages/artist';
import Album from '../pages/album';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Start} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/library" component={Start} />
    <Route exact path="/me" component={Me} />
    <Route exact path="/artists/:id" component={Artist} />
    <Route path="/albums/:id" component={Album} />
  </Switch>
);

export default Routes;
