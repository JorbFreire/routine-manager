import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login/index';
import Home from './pages/home/index';
import TaskNew from './pages/task-new/index';
import Registration from './pages/registration/index';

const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route path='/' exact component={Login} />
    <Route path='/home' component={Home} />
    <Route path='/task/new' component={TaskNew} />
    <Route path='/registration' component={Registration} />
  </Switch>
  </BrowserRouter>
)

export default Routes;