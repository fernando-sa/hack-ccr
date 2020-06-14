import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page404 from './pages/Page404';
import Main from './pages/activities';
import Awards from './pages/awards';
import GetAward from './pages/awards/details';
import Question from './pages/activities/details';
import Profile from './pages/Profile';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/premios" exact component={Awards} />
        <Route path="/premios/:_id" component={GetAward} />
        <Route path="/resgatar" exact component={GetAward} />
        <Route path="/atividade/:id" exact component={Question} />
        <Route path="/meu-perfil" exact component={Profile} />
        <Route path='*' component={Page404} />
      </Switch>
    </BrowserRouter>
)};

export default Routes;