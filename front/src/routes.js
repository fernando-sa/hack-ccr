import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Awards from './pages/Awards';
import GetAward from './pages/GetAward';
import Question from './pages/Question';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/premios" exact component={Awards} />
      <Route path="/resgatar" exact component={GetAward} />
      <Route path="/pergunta" exact component={Question} />
    </Switch>
  </BrowserRouter>
);

export default Routes;