import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from '../pages/start';
import Search from '../pages/search';
import Albuns from '../pages/_albuns';

const Routes = () => (
  <Switch>
    <Route exact path="/search" component={Search} />
    <Route exact path="/" component={Start} />
    <Route exact path="/library" component={Start} />
    {/** Filters */}
    {/* <Route exact path="/top" component={Start} />
    <Route exact path="/artists" component={Start} />
    <Route exact path="/albuns" component={Albuns} />
    <Route exact path="/tracks" component={Start} />
    <Route exact path="/gender" component={Start} /> */}
  </Switch>
);

export default Routes;
