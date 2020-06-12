import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Test from './pages/Test';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/test" exact component={Test} />
    </Switch>
  </BrowserRouter>
);

export default Routes;