import React from 'react';

import { BrowserRouter, Switch,  Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
  <BrowserRouter> {/* isso define que iremos usar um browser */}
    <Switch> {/* permite que uma unica rota seja chamada ao mesmo tempo */}
      <Route path="/" component={Main} exact /> 
      <Route path="/products/:id" component={Product} /> 
    </Switch>
  </BrowserRouter>
);

export default Routes;
