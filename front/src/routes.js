import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page404 from './pages/Page404';
import Main from './pages/activities';
import Awards from './pages/awards';
import GetAward from './pages/awards/details';
import Research from './pages/activities/research';
import Rating from './pages/activities/rating';
import Video from './pages/activities/video';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/premios" exact component={Awards} />
        <Route path="/premios/:id" component={GetAward} />
        <Route path="/resgatar" exact component={GetAward} />
        <Route path="/pesquisa/:id" exact component={Research} />
        <Route path="/video/:id" exact component={Video} />
        <Route path="/avaliacao/:id" exact component={Rating} />
        <Route path="/meu-perfil" exact component={Profile} />
        <Route path="/login" exact component={Login} />
        <Route path="/cadastro" exact component={Register} />
        <Route path='*' component={Page404} />
      </Switch>
    </BrowserRouter>
)};

export default Routes;