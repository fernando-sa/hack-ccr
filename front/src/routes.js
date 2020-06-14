import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Awards from './pages/Awards';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/premios" exact component={Awards} />
    </Switch>
  </BrowserRouter>
);

export default Routes;