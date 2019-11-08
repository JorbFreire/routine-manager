import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home/index';

import Login from './pages/login';
import Registration from './pages/registration';
import TaskCreator from './pages/taskCreator';

const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route path='/' exact component={Login} />
    <Route path='/login' component={Login} />
    <Route path='/home' component={Home} />
    <Route path='/task/new' component={TaskCreator} />
    <Route path='/registration' component={Registration} />
  </Switch>
  </BrowserRouter>
)

export default Routes;