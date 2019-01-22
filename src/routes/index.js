import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from '../pages/start';
import Search from '../pages/search';
import Me from '../pages/me';
import Library from '../pages/myLibrary';

import Artist from '../pages/artist';
import AlbumDetail from '../pages/album';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Start} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/library" component={Library} />
    <Route exact path="/me" component={Me} />
    <Route path="/artists/:id" component={Artist} />
    <Route path="/albums/:id" component={AlbumDetail} />
  </Switch>
);

export default Routes;
